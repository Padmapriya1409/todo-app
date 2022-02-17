import React from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import Display from './components/UsersDisplay/Display'


class App extends React.Component{
    render(){
        return(
            <>
            <AddTodo/><Display/>
            </>
        )
    }
}
export default App