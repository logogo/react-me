import React, { Component } from 'react';


export default function(Com){
    return class extends Component{
        render(){
            let json = {name:'lil',age:1111}
            return <Com {...json}/>
        }
    }
}