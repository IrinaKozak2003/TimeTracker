import { observer } from "mobx-react-lite";
import React from "react";
import Stopwatch from "../components/StopWatch";
import AddBudget from "../components/AddBudget";
import { ProgressBar } from "react-bootstrap";

//создай массив из пользователей

const users = [
    {id: 1, name: 'Vlad', age: 23},
    {id: 2, name: 'Sasha', age: 23},
    {id: 3, name: 'Masha', age: 23},
    {id: 4, name: 'Dasha', age: 23},
    {id: 5, name: 'Pasha', age: 23},
]
//создай массив из пакетов
const packages = [
    {id: 1, name: 'First item', budget: 68, TotalTime: "2:51:21", owner: true }
]
const Package = observer(()=>{
    
    return(<div>

        <h1>{packages[0].name}</h1>

        <h2>Budjet</h2>
        <div>{packages[0].budget}</div>
        <ProgressBar now={packages[0].budget} />
        <h2>TotalTime</h2>
        <div>{packages[0].TotalTime}</div>
        <h2>Users</h2>
       {users.map(user => (
           <div key={user.id}>
                <div>{user.name}</div>
              </div>))}
        <Stopwatch />
        <AddBudget />
        </div>
    )
})

export default Package;