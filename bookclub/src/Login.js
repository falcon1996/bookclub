import React, {Component} from 'react';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: {"Content-Type": "application/json"}
        })
            .then((response) => {return response.json()})
            .then((data) => {
                console.log(data);
            })
    }
    
    
    emailSubmit = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    passwordSubmit = (event) => {
        this.setState({
            password: event.target.value
        });
    }


    render(){
        return(
            <div>
                <form onSubmit = {this.submitHandler}>
                    <input className="form-control" type="text" placeholder="Email" onChange={this.emailSubmit} value={this.state.email} required/>
                    <input className="form-control" type="password" placeholder="Password" onChange={this.passwordSubmit} value={this.state.password} required/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;