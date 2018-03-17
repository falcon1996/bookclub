import React, {Component} from 'react';
import "isomorphic-fetch";

class AllComp extends Component{
    
    constructor(props){
        super(props);
        this.state={
            link:'',
            mylinks:[]
        };
    }

    
    componentDidMount(){
        var i = this.props.allbooks.length;
        for(let j=0; j<i; j++){
            
            //var owner = this.props.allbooks[j]["email"];
            
            
            fetch('/myapi',{
                method: 'POST',
                body: JSON.stringify({
                    myquery: this.props.allbooks[j]["book"]
                }),
                headers: {"Content-Type": "application/json"}
            })
                .then( (response) => {return response.json(); })
                .then( (data) => {
                	console.log(data.insert[0].thumbnail);
                	this.setState({
                	    link:data.insert[0].thumbnail,
                	    mylinks: this.state.mylinks.concat([{link:data.insert[0].thumbnail, owner: this.props.allbooks[j]["email"]}])
                	});
                });
        }
    }
    
    deleteAll = () => {
        fetch('/deleteall')
                .then( (response) => {return response.json(); })
                .then( (data) => {
                    console.log(data);
                })
    }
    
    contactOwner = (owner) => {
        fetch('/contact',{
                method: 'POST',
                body: JSON.stringify({
                    myself: window.loginText,
                    bookowner: owner
                }),
                headers: {"Content-Type": "application/json"}
            })
                .then( (response) => {return response.json(); })
                .then( (data) => {
                	console.log(data);
                });
    }
    
    
    render(){
        
        const items = this.state.mylinks.map( (item,i) => {
            return(
                    <li key={i}> 
                        <img src={item['link']} alt="Book!"  /> <button className="btn btn-primary" onClick={() => this.contactOwner(item['owner'])}>Request</button>
                        <hr />
                    </li>
                );  
        });
        
        return(
            <div id="centered" >
                <button className="btn btn-primary" onClick={this.deleteAll}>Delete All</button>
                 <h4>Just Added: {this.props.addedbook}</h4>
                {items}
            </div>
        );
    }
}

export default AllComp;