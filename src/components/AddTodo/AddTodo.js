import React from "react";
import ShowTodo from "../ShowTodo/ShowTodo";
import "./addtodo.css"

class AddTodo extends React.Component{
    constructor(){
        super()
        this.state={
            todoName:"",todoArr:[]
        }
    }
    handlechange=(event)=>{
        // console.log(event.target.value)
        this.setState({
            todoName:event.target.value
        })
    }
    handleAdd=(event)=>{
        event.preventDefault()
        if(!this.state.todoName){
            alert('Fill the items')
        }
        else{
            // const mytodoData={
            //     id:Math.floor(Math.random()*1000),
            //     todoName:this.state.todoName
            // }
        console.log(this.state.todoName)
        this.setState({
            todoArr:[...this.state.todoArr,this.state.todoName]
            // spreadoperator or concat
            // todoArr:this.state.todoArr.concat(this.state.todoName)
        })
        this.setState({
            todoName:""
        })
    }
}
    handleClear=()=>{
        // console.log("clear")
        if(window.confirm('Are you sure to clear!')){
        this.setState({
            todoArr:[]
        })
    }
}
    handleDelete=(refData)=>{
        // console.log("del")
        if(window.confirm('Are you sure to delete!')){
        const selDel=this.state.todoArr.filter((data)=>data === refData)
        this.setState({
            todoArr:selDel
        })
    }
}
    render(){
        const{todoName,todoArr}=this.state
        console.log(todoArr)
        return(
            <>
            <div className="container">
            <form>
                <div className="form-main">
                    <div className="form-input">
                        <input type="text" value={todoName} onChange={this.handlechange} placeholder="enter todo list" name="todos"/>
                    </div>
                    <div className="form-btn">
                        <button onClick={this.handleAdd}>+</button>
                    </div>
                </div>
            </form>
            <ShowTodo todoData={{todoArr:todoArr,handleClear:this.handleClear,handleDelete:this.handleDelete }}></ShowTodo>
            </div>
            </>
        )
    }
}
export default AddTodo