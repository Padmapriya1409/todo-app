import axios from "axios";
import React,{Component} from "react";

class Display extends Component{

    constructor(){
        super()
        this.state={
            userdata:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            // console.log(res.data)
            this.setState({
                userdata:res.data
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.userdata.map((data)=>{
                    return(
                        <div>
                            <h2>{data.username}</h2>
                            <h3>{data.email}</h3>
                            <h4>{data.website}</h4>
                            <h5>{data.address.street}</h5>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Display