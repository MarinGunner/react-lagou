//types
const SET_COLLECT  = 'detail/set_collect'

let collected = localStorage.getItem('collect')

const initialState={
    collectList:collected?JSON.parse(collected):[]
}
//reducer
export default (state=initialState,action)=>{
    let collectList=[];
    switch(action.type){
        case SET_COLLECT:
        //新增工作到收藏夹，判断是否已经收藏
            let index= state.collectList.findIndex(item=>(item.positionId===action.value.positionId))
            if(index>=0){
                //如果存在
                return state;
            }else{
                //如果不存在
              collectList = [...state.collectList,action.value]
            }
            break;
        default:
            return state;
    }
    localStorage.setItem('collect',JSON.stringify(collectList));
    return {
        ...state,
        collectList:collectList
    }
}



//同步action
export const setCollect = (value)=>({
    type:SET_COLLECT,
    value
})