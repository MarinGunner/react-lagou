import React,{Component} from 'react'

const ErrorPanel = (props) => {
    return (
        <div className='page subpage' id='error'>
            <h3>出错了...</h3>
        </div>
    )
}

export default class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            isError:false
        }
    }
    render(){
          
        return this.state.isError?<ErrorPanel/>:this.props.children;
    }
    componentDidCatch(){
        console.log(111);
        
        this.setState({
            isError:true
        })
    }
}
