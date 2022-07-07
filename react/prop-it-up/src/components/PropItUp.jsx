import React, {Component} from 'react';

class PropItUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            personAge: this.props.personAge
        }
    }

    render(){
        return(
            <div className='person'>
                <h2>{this.props.personName}</h2>
                <p>age: {this.state.personAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.setState({personAge: this.props.personAge+1})}>its your birthday {this.props.personName}!</button>
            
            </div>
        )
    }
}

export default PropItUp