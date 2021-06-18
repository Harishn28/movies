import React, { Component } from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import Router from './Routes';

class App extends Component {
    render(){
        return(
            <Provider store={store}>
            <div style={{height:'100vh'}}>
                <Router/>
            </div>
            </Provider>
        );
    }
} 

export default App;
