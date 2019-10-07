import React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import LoginFormContainer from './components/LoginFormContainer'
import SignupFormContainer from './components/SignupFormContainer';

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Route path='/' exact component={Home}/>
            <Route path="/signup" component={SignupFormContainer}/>
            <Route path="/login" component={LoginFormContainer} />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
