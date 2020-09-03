import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className='chats'>
            <Chat
                name='Jennifer'
                message='Hello babe'
                timestamp='24 minutes ago'
                profilePic='https://upload.wikimedia.org/wikipedia/commons/1/16/JenniferAnistonHWoFFeb2012.jpg'
            />
            <Chat
                name='Courtney'
                message='Sorry, now its to late?'
                timestamp='1 hour ago'
                profilePic='https://fotografias.antena3.com/clipping/cmsimages01/2020/05/07/0D1A8072-CED4-4AAB-9F78-544BBA83F960/58.jpg'
            />
            <Chat
                name='Lisa'
                message='Tomorrow works for u?'
                timestamp='5 hours ago'
                profilePic='https://www.instyle.es/medio/2019/05/21/lisa-kudrow_84cfbd05_1280x720.jpg'
            />
            <Chat
                name='Sofía'
                message='Please tell me something...'
                timestamp='2 days ago'
                profilePic='https://files.lafm.com.co/assets/public/2019-08/sofia_vergara_2.jpg'
            />
        </div>
    )
}

export default Chats
