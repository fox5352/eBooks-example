import React from 'react'

export const Stars = ({rating}) => {
    let newList = []
    
    for (let i = 0; i < 5; i++) { 
      newList.push(i < rating? <i key={String(i) + String(Math.floor(Math.random()* 99)) + String(Math.floor(Math.random()* 99))} class="bi bi-star-fill"></i>:<i class="bi bi-star"></i>)
    }

    return newList.map(star=>star)
}
