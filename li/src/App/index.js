import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import acts from './reducer/action'
import Exam from './component/exam.js'
import MeRef from './component/meRef.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'asdasd'
        }
    }
    changeName(me){
        me.setState((preState)=>{
            return {
                name:preState.name+'1111'
            }
        })
    }
    componentDidMount(){
        //this.props.actions.acts()//异步
    }
    render(){
        let { changeName } = this;
        let { name } = this.state;
        return (
            <div>
                <div>默认数据</div>
                <div>远程数据</div>
                <div>{this.props.appData.newsList}</div>
                {name}
                <button onClick={()=>{
                    changeName(this)
                }}>按钮</button>
                <Exam/>
                <MeRef/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appData: state.appData
    }
}

const mapDispatchToProps = ()=> {
    return dispatch => {
        return {
            actions: bindActionCreators(acts, dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);