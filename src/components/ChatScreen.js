import React, {useState} from "react";
import "./styles/ChatScreen.css";

const ChatScreen = () => {

    const [messages, setMessages] = useState([
        {
            name: "Rokas",
            image: 'https://randomuser.me/api/portraits/men/89.jpg',
            message: "What is up?!"
        },

        {
            name: "Rokas",
            image: 'https://randomuser.me/api/portraits/men/89.jpg',
            message: "What is going?!"
        },

        {
            message: "Hi, how are you?"
        },

    ]);

    return (
        <div className="chatScreen">
            <h1>Rokas</h1>
        </div>
    )
}

export default ChatScreen;