import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { useTitle, signIn } from "../../hooks";


import { InputBlock } from "../../components/InputBlock";
import { useUser } from "../../stateManagement/user/UserContext";

export const SignPage = () => {
    const { login } = useUser()
    const { pathname } = useLocation()
    const redirect = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    useTitle(pathname.replace('/', ''))

    const submit = async (e) => {
        e.preventDefault()
        // if login route then get data for login else add email to object
        let newData = pathname.replace('/','') === 'login'? {email: formData.email, password: formData.password}: {name:formData.name, email: formData.email, password: formData.password}

        // post data on appropriate route then get response token else throw error for now TODO:later hook
        try {
            const response = await signIn(newData, pathname)

            // if the login/register is valid stores userID and token in session storage
            if (response.accessToken) {
                login(response.user.id, response.accessToken)
                redirect('/products')
            }else{
                // TODO: create own toast popup
                alert(response)
            }
        } catch (error) {
            throw new Error(error)
        }

        // empty form data to 
        setFormData({
        name: '',
        email: '',
        password: ''
        })
    }

    const loginAsGuest = async (e) => {
        e.preventDefault()
        const data = {email: process.env.REACT_APP_GUEST_EMAIL, password: process.env.REACT_APP_GUEST_PASSWORD}

        // post data on appropriate route then get response token else throw error for now TODO:later hook
        try {
            const response = await signIn(data, pathname)

            // if the login/register is valid stores userID and token in session storage
            if (response.accessToken) {
                login(response.user.id, response.accessToken)
                redirect('/products')
            }else{
                // TODO: create own toast popup
                alert(response)
            }
        } catch (error) {
            throw new Error(error)
        }

    }

    return(
        <>
            <main> 
                <form className="w-[500px] p-6 py-4 mx-auto rounded-lg shadow-lg dark:shadow-slate-500" onSubmit={submit}>
                    <fieldset className="px-4 py-1 pb-4 rounded-lg border-[3px] border-neutral-300 dark:border-slate-500">
                        <legend className="px-1.5 mx-auto text-lg tracking-[3px] first-letter:capitalize">{pathname.replace('/','')}</legend>
                        {/* if register url path then render username field */}
                        {pathname.replace('/','') === 'register'&& <InputBlock type='text' label='Name' func={setFormData} name='name' state={formData.name} /> }

                        <InputBlock type='email' label='Email' func={setFormData} name='email' state={formData.email} />
                        <InputBlock type='password' label='Password' func={setFormData} name='password' state={formData.password} />
                        <div className="flex justify-center">
                            <button className="px-3 py-1 mt-2 mb-1 shadow-md dark:shadow-slate-500 hover:shadow-lg rounded-md hover:bg-neutral-200 dark:bg-zinc-700 dark:hover:shadow-slate-500" type="submit">Enter</button>
                        </div>
                    </fieldset>
                    {pathname.replace('/','') === 'login' && <div className="flex justify-center">
                        <button className="px-3 py-1 mt-2 mb-1 shadow-md dark:shadow-slate-500 hover:shadow-lg rounded-md hover:bg-neutral-200 dark:bg-zinc-700 dark:hover:shadow-slate-500" onClick={loginAsGuest}>Login as Guest</button>
                    </div>}
                </form>
            </main>
        </>
    )
}