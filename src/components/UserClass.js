import React from "react"

class User extends React.Component
{
    constructor(props){
     super(props)
     this.state = {
        userInfo:{
            name:"Dummy",
            location:"dummy location"
        }
     }
    }

    async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/rizwanreactjs")
        const json = await data.json()
        console.log(json)
        this.setState({
          userInfo:json
        })


    }

    render(){
        const {name,location} = this.state.userInfo

        return (
            <div>
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
            </div>
        );
    }
}

export default User