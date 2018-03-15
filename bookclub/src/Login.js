import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            loginInfo:'',
            email:'',
            password:''
        };
    }
    
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    if(this.state.loginInfo === 'Exists'){
                        NotificationManager.info('Logged In!');
                    }
                    else{
                        NotificationManager.info('Wrong Password or Email!');
                    }
                    break;
                        
                case 'success':
                    NotificationManager.success('Success!', 'Signed In');
                    break;
            }
        };
    };
    
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
                this.setState({
                    loginInfo: data.mystatus    
                });
            })
            .then(this.createNotification('info'));
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
                <NotificationContainer/>
            </div>
        );
    }
}

export default Login;