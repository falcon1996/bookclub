import React, {Component} from 'react';
import "isomorphic-fetch";

class AllComp extends Component{
    
    constructor(props){
        super(props);
        this.state={
            link:''
        }
    }

    /*
    componentDidMount(){
    
        fetch('/myapi',{
            method: 'POST',
            body: JSON.stringify({
                myquery: this.props.addedbook
            }),
            headers: {"Content-Type": "application/json"}
        })
            .then( (response) => {return response.json(); })
            .then( (data) => {
            	console.log(data)
            })
    }
    
    
    */
    
    seeAll = () => {
        
        fetch('/myapi',{
            method: 'POST',
            body: JSON.stringify({
                myquery: this.props.addedbook
            }),
            headers: {"Content-Type": "application/json"}
        })
            .then( (response) => {return response.json(); })
            .then( (data) => {
            	console.log(data.insert[0].thumbnail)
            	this.setState({
            	    link:data.insert[0].thumbnail
            	})
            })
        
    }
    
    render(){
        
        return(
            <div>
                <button onClick={this.seeAll}>View added Books</button>
                <h1>{this.props.addedbook}</h1>
                <a href='#'> 
                    <img src={this.state.link} alt="Book!"  /> 
                </a>

                
            </div>
        );
    }
}

export default AllComp;