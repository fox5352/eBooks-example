const URL = import.meta.env.REACT_APP_URL

export async function getUser() {
  const token = JSON.parse(sessionStorage.getItem('token'))
  const userID = JSON.parse(sessionStorage.getItem('cbid'))

  try {
    const response = await (await fetch(`${URL}/600/users/${userID}`, {
      headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${token}`},
      method: 'GET', 
    })).json()
    return await response

  } catch (error) {
    console.log(error);
    return error
  }
}

export async function getUserOrder() {
  const token = JSON.parse(sessionStorage.getItem('token'))
  const userID = JSON.parse(sessionStorage.getItem('cbid'))

  const response = await(await fetch(`${URL}/660/orders?user.id=${userID}`, {
        headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${token}`},
        method: 'GET', 
      })).json()

    return await response
}

export async function createOrder(formData, list, total) {
  const token = JSON.parse(sessionStorage.getItem('token'))
  const userID = JSON.parse(sessionStorage.getItem('cbid'))
  const order = JSON.stringify({
    user: {
      id: userID,
      ...formData
    },
    carList: list,
    bill: total,
    quantity: list.length
  })

  const response = await (await fetch(`${URL}/660/orders`, {
    headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${token}`},
    method: 'POST',
    body: order
  })).json()  
  
  return await response
}

export async function signIn(formData, pathname) {
  const response = await (await fetch(`${URL}${pathname}`, {
    headers: {
        "content-type": 'application/json'
    },
    method: "POST",
    body: JSON.stringify(formData)
  })).json()

  return await response
  
}

export async function getProducts(path) {
  try {
    const response = await (await fetch(`${URL}/444/${path}`)).json()
    return await response
  } catch (error) {
    console.log(error);
    return []
  }
}