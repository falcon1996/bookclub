import React, {Component} from 'react';
import "isomorphic-fetch";

class AllComp extends Component{
    
    constructor(props){
        super(props);
        this.state={
            link:'',
            mylinks:[]
        }
    }

    
    componentDidMount(){
        var i = this.props.allbooks.length
        for(var j=0; j<i; j++){
        
            fetch('/myapi',{
                method: 'POST',
                body: JSON.stringify({
                    myquery: this.props.allbooks[j]
                }),
                headers: {"Content-Type": "application/json"}
            })
                .then( (response) => {return response.json(); })
                .then( (data) => {
                	console.log(data.insert[0].thumbnail)
                	this.setState({
                	    link:data.insert[0].thumbnail,
                	    mylinks: this.state.mylinks.concat([data.insert[0].thumbnail])
                	})
                })
        }
    }
    
    
    render(){
        
        const items = this.state.mylinks.map( (item,i) => {
            return(
                    <li key={i}> 
                        <img src={item} alt="Book!"  /> <button className="btn btn-primary">Request</button>
                        <br/><br/>
                    </li>
                );  
        })
        
        return(
            <div id="centered" >
                 <h4>Just Added: {this.props.addedbook}</h4>
                {items}
            </div>
        );
    }
}

export default AllComp;