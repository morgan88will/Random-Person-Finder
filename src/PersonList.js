import React, {useState} from 'react'
import {Person} from './Person'

export const PersonList = () => {
    const url = 'https://randomuser.me/api'
    const [users, setUsers] = useState([])
    const clearList = () => {
        setUsers([])
    }
    const getPerson = async () => {
        const response  = await fetch(url)
        const data = await response.json()
        const user = data.results[0]
        const condensedUser = {
            name: user.name.first + ' ' + user.name.last,
            gender: user.gender,
            age: user.dob.age,
            country: user.location.country,
            pic: user.picture.medium
        }
        
        setUsers([condensedUser, ...users])
    }
    return (
        <div >
            <button className="btn btn-dark" onClick={getPerson}>Get Random Person</button>
            <button className="btn btn-dark btn-danger" onClick={clearList}>Clear</button>
            <br></br>
            <br></br>
            {users.length > 0 ? users.map(user =>
            <Person pic={user.pic} name={user.name} gender={user.gender}
             age={user.age} country={user.country} /> ) :
            'People will show up here'}
            
        </div>
    )
}
