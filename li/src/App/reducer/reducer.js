const defaultState = {
    newsList: '11aaa'
}

export default (state = defaultState, action) =>{
    switch(action.type){
        case 'acts': 
            return {
                newsList: 'asdasdasd'
            }
        default: return state
    }
}