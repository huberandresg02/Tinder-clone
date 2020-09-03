import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Header({backButton}) {
    return (
        <div className='header'>
            { backButton ? (
                <>
                    <Link to='/'>
                        <IconButton>
                            <ArrowBackIosIcon className='header__icon' fontSize='large' />
                        </IconButton>
                    </Link>
                    <Link to='/'>
                        <img
                            className='header__logo'
                            alt=''
                            src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
                        />
                    </Link>
                    <Link to='/chats'>
                        <IconButton>
                            <ForumIcon className='header__icon' fontSize='large' />
                        </IconButton>
                    </Link>
                </>
            ) : (
                <>
                    <IconButton>
                        <PersonIcon className='header__icon' fontSize='large' />
                    </IconButton>
                    <Link to='/'>
                        <img
                            className='header__logo'
                            alt=''
                            src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
                        />
                    </Link>
                    <Link to='/chats'>
                        <IconButton>
                            <ForumIcon className='header__icon' fontSize='large' />
                        </IconButton>
                    </Link>
                </>
            ) }
            
        </div>
    )
}

export default Header
