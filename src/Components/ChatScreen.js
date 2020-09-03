import React, { useState } from 'react'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Jennifer',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/JenniferAnistonHWoFFeb2012.jpg',
            message: 'Whats up?'
        },
        {
            name: 'Jennifer',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/JenniferAnistonHWoFFeb2012.jpg',
            message: 'Hows it going?'
        },
        {
            message: 'Hi! how are u mor'
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}])
        setInput('')
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH Jennifer ON 10/08/20</p>
            {
                messages.map(message => (
                    message.name ? (
                        <div className='chatScreen__message'>
                            <Avatar
                                className='chatScreen__image'
                                alt={message.name}
                                src={message.image}
                            />
                            <p className='chatScreen__text'>{message.message}</p>
                        </div>
                    ) : (
                        <div className='chatScreen__message'>
                            <p className='chatScreen__textUser'>{message.message}</p>
                        </div>
                    )
                ))
            }
            <form className='chatScreen__input'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Type a message'
                    type='text'
                    className='chatScreen__inputField'
                />
                <button
                    type='submit'
                    className='chatScreen__inputButton'
                    onClick={handleSend}
                >
                    SEND
                </button>
            </form>
        </div>
    )
}

export default ChatScreen
