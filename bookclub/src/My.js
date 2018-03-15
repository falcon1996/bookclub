import React, {Component} from 'react';

class MyComp extends Component{
    
    constructor(props) {
		super(props);
	}
    
    render(){
        return(
            <div>
            <p>{window.loginText}</p>
                <form onSubmit={this.props.addNewBook}>
                    <input className="form-control" onChange={this.props.inputNewBook} value={this.props.newbook} placeholder='Enter Book Name!'/>
                    <button className="btn btn-primary" onClick={this.props.alldisplay}>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComp;