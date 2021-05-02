import React, {useState} from "react";
import "./styles/ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
    // this will keep track at what you are writing in the input field
    const [input, setInput] = useState('');
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

    const handleSend = e => {
        if(input.length === 0) {
            return input;
        }
        e.preventDefault();
        // this will add to messanges state, the new message from the input, and keep the old ones too
        setMessages([...messages, {message: input}]);
        setInput('');
    }

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
                    <div className="abc">
                        <p  className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
                <form  className="chatScreen__input">
                    {/* on change uses the event data, and puts to the iinput state, the value, we have entered*/}
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputField" placeholder="type message here..." type="text"/>
                    <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
    );
}

export default ChatScreen;