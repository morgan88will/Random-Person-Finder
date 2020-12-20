import React from 'react'
export const Person = ({name, gender, age, country, pic}) => {
    
    return (
        <div className='card bg-light'>
           <img src={pic} style={{float: 'right'}} ></img>
           <h1>{name}</h1>
           {`${gender}, ${age} years old, from ${country}`}
        </div>
    )
}
