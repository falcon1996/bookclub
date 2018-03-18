import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import MyComp from './My.js';
import AllComp from './All.js';

import Login from './Login.js';
import Signup from './Signup.js';

class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            newbook:'',
            addedbook:'',
            allbooks:[],
            mybooks:[]
        };
    }
    
    setLogin = (event) => {
        this.setState({
            loginEmail: event.target.value
        });
    }
    
    inputNewBook = (event) => {
        this.setState({
            newbook: event.target.value
        });
    }
    
    addNewBook = (event) => {
        event.preventDefault();
        this.setState({
            addedbook: this.state.newbook,
            //allbooks:this.state.allbooks.concat([this.state.newbook])
        });
    }
    
    alldisplay = (event) => {
        this.setState({
            allbooks:[],
            mybooks: []
        });
        console.log(this.state.newbook);
        
        fetch('/addnew',{
                method: 'POST',
                body: JSON.stringify({
                    user: window.loginText,
                    newbook: this.state.newbook
                }),
                headers: {"Content-Type": "application/json"}
            })
                .then( (response) => {return response.json(); })
                .then( (data) => {
                	console.log(data);
                	this.setState({
                	    allbooks:this.state.allbooks.concat(data.insert),
                	    mybooks: this.state.mybooks.concat(data.myinsert)
                	});
                });
    }
    
    
    render() {
        return (
            <HashRouter>
                <div className="App">
                
                    <ul className="header">
                        <li><NavLink to="/my">My</NavLink></li>
                        <li><NavLink to="/all">All</NavLink></li>
                        
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li>
                    </ul>
                
                    <div className="content">
                        <Route 
                            path="/my" 
                            render={(props) => <MyComp {...props} newbook={this.state.newbook} inputNewBook={this.inputNewBook} addNewBook={this.addNewBook} alldisplay={this.alldisplay} mybooks={this.state.mybooks} />}
                        />
                        
                         <Route 
                            path="/all" 
                            render={(props) => <AllComp {...props} addedbook={this.state.addedbook} allbooks={this.state.allbooks}  />}
                        />    
                        
                        <Route path="/login" component={Login}/>    
                        
                        <Route path="/signup" component={Signup}/>
                    
                    </div>
                    
                </div>
            </HashRouter>
        );
    }
}

export default App;