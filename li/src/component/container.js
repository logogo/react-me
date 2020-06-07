import React, { Component } from 'react';
import oStyle from './container.css'

export default class Container extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<div className={oStyle.red}>{this.props.children}</div>)
    }
}