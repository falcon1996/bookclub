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
            loginEmail: '',  //New variable
            newbook:'',
            addedbook:'',
            allbooks:[]
        }
    }
    
    inputNewBook = (event) => {
        this.setState({
            newbook: event.target.value
        });
    }
    
    addNewBook = (event) => {
        event.preventDefault()
        this.setState({
            addedbook: this.state.newbook,
            //allbooks:this.state.allbooks.concat([this.state.newbook])
        });
    }
    
    alldisplay = (event) => {
        console.log(this.state.newbook);
        
        fetch('/addnew',{
                method: 'POST',
                body: JSON.stringify({
                    newbook: this.state.newbook
                }),
                headers: {"Content-Type": "application/json"}
            })
                .then( (response) => {return response.json(); })
                .then( (data) => {
                	console.log(data.insert)
                	this.setState({
                	    allbooks:this.state.allbooks.concat(data.insert)
                	})
                })
        
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
                            render={(props) => <MyComp {...props} newbook={this.state.newbook} inputNewBook={this.inputNewBook} addNewBook={this.addNewBook} alldisplay={this.alldisplay} />}
                        />
                        
                         <Route 
                            path="/all" 
                            render={(props) => <AllComp {...props} addedbook={this.state.addedbook} allbooks={this.state.allbooks}  />}
                        />    
                        
                        <Route 
                            path="/login"
                            render={(props) => <Login {...props} email={this.state.loginEmail}  />}
                        />    
                        
                        <Route path="/signup" component={Signup}/>
                    
                    </div>
                    
                </div>
            </HashRouter>
        );
    }
}

export default App;