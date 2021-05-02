import React from "react";
import "./styles/Chats.css";
import Chat from "./Chat";

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Rokas"
                message="Yo what is going on????!"
                timestamp="40 seconds ago"
                profilePic="https://randomuser.me/api/portraits/men/89.jpg"
            />

            <Chat
                name="Ellen"
                message="Yo what is up 🤟 ?!"
                timestamp="2 seconds ago"
                profilePic="https://randomuser.me/api/portraits/women/8.jpg"
            />

            <Chat
                name="Sandra"
                message="Ola 😘"
                timestamp="5 days ago"
                profilePic="https://randomuser.me/api/portraits/women/44.jpg"
            />

            <Chat
                name="Natasha"
                message="Ooops there he is 🙃 😘"
                timestamp="10 days ago"
                profilePic="https://randomuser.me/api/portraits/women/21.jpg"
            />

        </div>
    )
}

export default Chats;