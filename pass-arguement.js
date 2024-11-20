import { Component } from "react";

class Child extends Component{
    constructor(){
        super();
        this.handleNum = this.handleNum.bind(this)
    }
    state = {
        num : 0
    }
    handleNum(event,id,name){
        console.log('id ====>',id)
        console.log('name ====>',name)
        console.log('event ====>',event)
        console.log('this ====>',this)

    }
    render(){
        return(<div>
            <h1>{this.state.num}</h1>
            <button onClick={this.handleNum.bind(this,'myID','Umair')}>Add number</button>
            <button onClick={(event)=>this.handleNum(event,'myID','Umair')}>Add number</button>
        </div>)
    }
}

export default Child
