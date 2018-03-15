import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Signup extends Component{
    
    constructor(props) {
        super(props);
        
        this.state={
            signupInfo:'',
            email:'',
            password:''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
     }
     
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                      NotificationManager.info(this.state.signupInfo);
                      break;
                case 'success':
                      NotificationManager.success('Success!', 'Signed In');
                      break;
            }
        };
    };
    
    handleSubmit(event){
        event.preventDefault();
        fetch('/signup', {
          method: 'POST',
          body: JSON.stringify({
                    user: this.state.email,
                    password: this.state.password
                }),
                headers: {"Content-Type": "application/json"}
        })
            .then((response) => {return response.json()})
            .then((data) =>{
                console.log(data);
                this.setState({
                    signupInfo: data.mystatus
                });
            })
            .then(this.createNotification('info'));
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password:event.target.value
        });
    }
    handleEmailChange = (event) => {
        this.setState({
            email:event.target.value
        });
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" placeholder="email" onChange={this.handleEmailChange} value={this.state.email}  required/>
                    <input className="form-control" type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} required/>
                    <button className="btn btn-primary">Submit</button>
                </form>
                <NotificationContainer/>
            </div>
        );
    }
}

export default Signup;