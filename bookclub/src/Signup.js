import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Signup extends Component{
    
    createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
    
    constructor(props) {
        super(props);
        
        this.state={
            email:'',
            password:''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
     }
     
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'success':
                      NotificationManager.success('Success!', 'Signed In');
                      break;
                case 'error':
                      NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                  });
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
            })
            .then(this.createNotification('success'))
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password:event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" placeholder="email" onChange={this.handleEmailChange} value={this.state.email}  />
                    <input className="form-control" type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
                    <button className="btn btn-primary">Submit</button>
                </form>
                <NotificationContainer/>
            </div>
        )
    }
}

export default Signup;