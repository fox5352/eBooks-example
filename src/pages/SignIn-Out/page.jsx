import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";


import { InputBlock } from "./components/InputBlock";

export const SignPage = () => {
    const { pathname } = useLocation()
    const redirect = useNavigate()
    const [formData, setFormData] = useState({
        email: null,
        password: null
    })

    const submit = async (e) => {
        e.preventDefault()

        // if login route then get data for login else add email to object
        let newData = {email: formData.email, password: formData.password}

        // POST json newData
        const requestOpts = {
            headers: {
                "content-type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify(newData)
        }

        // post data on appropriate route then get response token else throw error for now
        try {
            const response = await (await fetch(`http://localhost:8000${pathname}`, requestOpts)).json()
            
            // if the login/register is valid stores userID and token in session storage
            if (response.accessToken) {
                sessionStorage.setItem('token', JSON.stringify(response.accessToken))
                sessionStorage.setItem('cbid', JSON.stringify(response.user.id))
            }
            
            response.accessToken? redirect('/products'): alert(response)
        } catch (error) {
            throw new Error(error)
        }

        // empty form data to 
        setFormData({
        userName: '',
        email: '',
        password: ''
        })
    }

    return(
        <>
            <main> 
                <form className="w-[500px] p-6 py-4 mx-auto rounded-lg shadow-lg dark:shadow-slate-500" onSubmit={submit}>
                    <fieldset className="px-4 py-1 pb-4 rounded-lg border-[3px] border-neutral-300 dark:border-slate-500">
                        <legend className="px-1.5 mx-auto text-lg tracking-[3px] first-letter:capitalize">{pathname.replace('/','')}</legend>
                        <InputBlock type='email' label='Email' func={setFormData} name='email' state={formData.email} />
                        <InputBlock type='password' label='Password' func={setFormData} name='password' state={formData.password} />
                        <div className="flex justify-center">
                            <button className="px-3 py-1 mt-2 mb-1 shadow-md dark:shadow-slate-500 hover:shadow-lg rounded-md hover:bg-neutral-200 dark:bg-zinc-700 dark:hover:shadow-slate-500" type="submit">Enter</button>
                        </div>
                    </fieldset>
                </form>       
            </main>
        </>
    )
}