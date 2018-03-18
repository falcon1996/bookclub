import React, {Component} from 'react';

class MyComp extends Component{
    
    constructor(props) {
		super(props);
		this.state={
		    mylinks:[]
		};
	}
    
    deleteMy = () => {
        fetch('/deletemy')
                .then( (response) => {return response.json(); })
                .then( (data) => {
                    console.log(data);
                });
    }
    
    
    componentDidMount(){
        var i = this.props.mybooks.length;
        for(let j=0; j<i; j++){
            
            fetch('/myapi',{
                method: 'POST',
                body: JSON.stringify({
                    myquery: this.props.mybooks[j]
                }),
                headers: {"Content-Type": "application/json"}
            })
                .then( (response) => {return response.json(); })
                .then( (data) => {
                	console.log(data.insert[0].thumbnail);
                	this.setState({
                	    mylinks: this.state.mylinks.concat([data.insert[0].thumbnail])
                	});
                });
        }
    }
    
    
    render(){
        
        const items = this.state.mylinks.map( (item,i) => {
            return(
                    <li key={i}> 
                        <img src={item} alt="Book!"/> 
                        <hr />
                    </li>
                );  
        });
        
        
        return(
            <div>
            <p>{window.loginText}</p>
                <button className="btn btn-primary" onClick={this.deleteMy}>Delete My</button>
                <form onSubmit={this.props.addNewBook}>
                    <input className="form-control" onChange={this.props.inputNewBook} value={this.props.newbook} placeholder='Enter Book Name!'/>
                    <button className="btn btn-primary" onClick={this.props.alldisplay}>Submit</button>
                </form>
                {items}
            </div>
        );
    }
}

export default MyComp;