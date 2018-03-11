import React, {Component} from 'react';

class Login extends Component{
    
    
    render(){
        return(
            <div>
                <form>
                    <input className="form-control" type="text" placeholder="Email"  />
                    <input className="form-control" type="password" placeholder="Password"  />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;