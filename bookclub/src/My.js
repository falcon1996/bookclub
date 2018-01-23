import React, {Component} from 'react';

class MyComp extends Component{
    
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
        console.log('All:');
        console.log(this.state.addedbook)
    }
    
    
    render(){
        return(
            <div>
                <form onSubmit={this.addNewBook}>
                    <input onChange={this.inputNewBook} value={this.state.newbook} placeholder='Enter Book Name!'/>
                    <button onClick={this.alldisplay}>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComp;