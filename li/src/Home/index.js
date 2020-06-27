import React, { Component } from 'react';
import Container from '../component/container.js';
import Other from './other.js'


class Home extends Component {
   tiao(){
    Other.open()
   }
   render(){
    let { tiao } = this;
       return  (<Container {...{width:100,height:100}}>
                <div onClick={()=>{
                    tiao()
                }}>1111</div>
                <div>1111</div>
                <div>1111</div>
                <div>1111</div>
            </Container>)
   }
}

export default Home;