import React, {Component} from 'react';

class Signup extends Component{
    
    constructor(props) {
        super(props);
        
        this.state={
            username:'falcon1996',
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
     }
     
    
    handleSubmit(event){
        fetch('/signup', {
          method: 'POST',
          body: JSON.stringify({
                    user: this.state.username
                }),
                headers: {"Content-Type": "application/json"}
        })
            .then((response) => {return response.json()})
            .then((data) =>{
                console.log(data);
            })
    }
    
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" placeholder="Email"  />
                    <input className="form-control" type="text" placeholder="Password"  />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup;