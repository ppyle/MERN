import React, {Component} from 'react';

class PropItUp extends Component{
    render(){
        return(
            <div className='person'>
                <h2>{this.props.personName}</h2>
                <p>age: {this.props.personAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            
            </div>
        )
    }
}

export default PropItUp