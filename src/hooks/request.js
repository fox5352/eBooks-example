
export async function getUser() {
  const token = JSON.parse(sessionStorage.getItem('token'))
  const userID = JSON.parse(sessionStorage.getItem('cbid'))
  
  const response = await (await fetch(`http://localhost:8000/600/users/${userID}`, {
      headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${token}`},
      method: 'GET', 
    })).json()

    return await response
}

export async function getUserOrder() {
  const token = JSON.parse(sessionStorage.getItem('token'))
  const userID = JSON.parse(sessionStorage.getItem('cbid'))

  const response = await(await fetch(`http://localhost:8000/660/orders?user.id=${userID}`, {
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

  const response = await (await fetch('http://localhost:8000/660/orders', {
    headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${token}`},
    method: 'POST',
    body: order
  })).json()  
  
  return await response
}