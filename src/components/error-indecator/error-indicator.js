import React, {Component} from 'react';
import ErrorMessage from '../error-message/error-message';

export default class ErrorIndicator extends Component{
    state = {
        error: false
    }

    componentDidCatch(){
        this.setState({
            error:true
        });
    }

    render(){
        if(this.state.error)
            return <ErrorMessage />
        return this.props.children;
    }
    
}