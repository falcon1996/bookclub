import React, {Component} from 'react';

class MyComp extends Component{
    
    constructor(props) {
		super(props);
	}
    
    render(){
        return(
            <div>
                <form onSubmit={this.props.addNewBook}>
                    <input onChange={this.props.inputNewBook} value={this.props.newbook} placeholder='Enter Book Name!'/>
                    <button onClick={this.props.alldisplay}>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComp;