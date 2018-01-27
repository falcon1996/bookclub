import React, {Component} from 'react';

class Signup extends Component{
    
    
    render(){
        return(
            <div>
                <form>
                    <input className="form-control" type="text" placeholder="Email"  />
                    <input className="form-control" type="text" placeholder="Password"  />
                    <input className="form-control" type="text" placeholder="Re-enter Password"  />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup;