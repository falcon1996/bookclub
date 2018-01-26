import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import MyComp from './My.js';
import AllComp from './All.js';

class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
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
            allbooks:this.state.allbooks.concat(this.state.newbook)
        });
    }
    
    alldisplay = (event) => {
        console.log('allBooks');
    }
    
    
    render() {
        return (
            <HashRouter>
                <div className="App">
                
                    <ul className="header">
                        <li><NavLink to="/my">My</NavLink></li>
                        <li><NavLink to="/all">All</NavLink></li>
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
                    
                    </div>
                    
                </div>
            </HashRouter>
        );
    }
}

export default App;