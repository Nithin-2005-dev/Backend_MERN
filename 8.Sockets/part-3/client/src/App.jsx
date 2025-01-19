import React, { useEffect, useState } from 'react'
import {io} from "socket.io-client"
const App = () => {
  const socket=io("http://localhost:8080/");
  const [messages,setMessages]=useState([])
  const [rec,setRes]=useState()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const message=e.target[1].value;
    const reciever=e.target[0].value;
    setRes(reciever)
    socket.emit("message",[...messages,message],rec);
  }
  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("connected",socket.id)
    })
    socket.on("message",(data)=>{
      setMessages(data)
    })
    socket.on("welcome",(message)=>{
      console.log(message)
    })
    return ()=>{
      socket.disconnect()
    }
  },[])
  return (
    <div>
    <ul>
    {messages && messages.map((message)=>{
     return <li>{message}</li>
    })}
    </ul>
    <form action="" onSubmit={handleSubmit}>
    <input type="text" name="message" id="" />
    <input type="text" name="message" id="" />
    <button >Send</button>
    </form>
    </div>
  )
}

export default App
