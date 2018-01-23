import React, { Component } from 'react';
import MyComp from './My.js';
import AllComp from './All.js';

class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            newbook:'',
            addedbook:''
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
            addedbook: this.state.newbook
        });
    }
    
    alldisplay = (event) => {
        console.log('allBooks');
    }
    
    
    render() {
        return (
            <div className="App">
                <MyComp newbook={this.state.newbook}
                inputNewBook={this.inputNewBook}
                addNewBook={this.addNewBook}
                alldisplay={this.alldisplay}
                />
                
                <AllComp addedbook={this.state.addedbook} />
            </div>
        );
    }
}

export default App;
