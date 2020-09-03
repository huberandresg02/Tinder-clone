import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            'name': 'Steve Jobs',
            'url': 'https://miro.medium.com/max/980/1*vgTONX6EwW9g9eZPuYI7tA.png'
        },
        {
            'name': 'Matt leBlanc',
            'url': 'https://i.pinimg.com/originals/cf/de/8d/cfde8d27378c73ddbb23bc216c1a7bfa.jpg'
        },
        {
            'name': 'Matthew Perry',
            'url': 'https://i.pinimg.com/736x/19/a2/76/19a276cb9e60c7ac7dd4824d72ff415d.jpg'
        },
        {
            'name' : 'David Schwimmer',
            'url': 'https://3gl4jm1hpdltkdx6a1zm3a27-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/DAVID-SCHWIMMER.jpg'
        },
        {
            'name': 'Charlie Sheen',
            'url': 'https://media.apnarm.net.au/media/images/2020/03/11/v3imagesbincd3c4e10a4c1e99418f1e2671548ae11-vnmvn5r8q8g5a028zt2_t1880.jpg'
        }
    ])
    return (
        <div className='tinderCards'>
            <div className='tinderCards__containerCards'>
                {
                    people.map(person => (
                        <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']}>
                            <div style={{backgroundImage: `url(${person.url})`}} className='card'>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
