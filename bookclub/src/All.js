import React, {Component} from 'react';

class AllComp extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h1>{this.props.addedbook}</h1>
            </div>
        );
    }
}

export default AllComp;