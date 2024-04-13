import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import socketIo from "socket.io-client";
import './Chat.css';

const ENDPOINT = "http://localhost:4500/";

const useQuery = ()=>{
    return new URLSearchParams(useLocation().search);
}
const Chat = () => {
    const query = useQuery();
    const name = query.get('Uname');
  const socket = socketIo(ENDPOINT,{transports:['websocket']})
  useEffect(()=>{const socket = socketIo(ENDPOINT,{transports:['websocket']})
    socket.on('connect',()=>{
        alert("Connected");
    })
    socket.emit('joined',{ name })
    socket.on('welcome',(data)=>{
        console.log(data.name,data.message)
    })
    socket.on('userJoined',(data)=>{
        console.log(data.name, data.message)
    })
    return ()=>{
     socket.emit('disconnect')
     socket.off();
    }
  },[socket,name])
  return (
    <div className="chatPage">
        <div className="chatContainer">
            <div className="header">
            </div>
            <div className="chatBox"></div>
            <div className="inputBox">
                <input type="text" id="chatInput"/>
                <button className="sendBtn">Send</button>
            </div>
        </div>
    </div>
  );
}

export default Chat;
