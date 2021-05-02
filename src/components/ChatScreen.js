import React, {useState} from "react";
import "./styles/ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {

    const [messages, setMessages] = useState([
        {
            name: "Rokas",
            image: 'https://randomuser.me/api/portraits/men/89.jpg',
            message: "What is up?! 🍭"
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
            <p className="chatScreen__timestamp">YOU MATCHED WITH ROKAS ON 10/09/21</p>
            {/* this one is looping per messages state and then we go per ech iteration, we show from the each message, the message key value*/}
            {/* means, the message itself*/}
            {messages.map(message => (
                // we are checking if the name is passed in the object, if not, so it is not the message from us
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                            className="chatScreen__avatar"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                    ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
        </div>
    );
}

export default ChatScreen;