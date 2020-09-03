import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TinderCards from './Components/TinderCards'
import Chats from './Components/Chats'
import SwipeButtons from './Components/SwipeButtons';
import ChatScreen from './Components/ChatScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path='/chats/:person'>
            <Header backButton='/' />
              <ChatScreen />
          </Route>
          <Route path='/chats'>
            <Header backButton />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
