import React,{Component} from "react";

class ShowTodo extends Component{
    // constructor(){
        // super()
    // }..default props
    render(){
        // console.log("from showtodo"+this.props.todoData)
        const{todoArr,handleClear,handleDelete}=this.props.todoData
        return(
            <div>
                <div className="display-data">
                {todoArr.map((data)=>{
                    return(
                        <div className="display-child">
                        <div className="display-list">
                            <h2>{data}</h2>
                            </div>
                            <div className="del-btn">
                            <button onClick={handleDelete}>X</button>
                        </div>
                        </div>
                    )
                })}
                </div>
                <div className="clearall">
                <button onClick={handleClear}>clear All</button>
            </div>
            </div>
        )
    }
}
export default ShowTodo
