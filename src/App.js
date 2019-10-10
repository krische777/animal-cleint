import React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import LoginFormContainer from './components/LoginFormContainer'
import SignupFormContainer from './components/SignupFormContainer';
import RoomsContainer from './components/RoomsContainer';
import GameContainer from './components/GameContainer'
import Waiting from './components/Waiting'
import Winner from './components/Winner'

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Route path='/' exact component={Home}/>
            <Route path="/signup" component={SignupFormContainer}/>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/lobby" component={RoomsContainer} />
            <Route path="/game" component = {GameContainer} />
            <Route path="/waiting" component = {Waiting} />
            <Route path="/winner" component = {Winner} />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
