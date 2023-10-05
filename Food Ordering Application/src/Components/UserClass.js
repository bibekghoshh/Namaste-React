import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);

        this.state={
            userInfo:{
                name:"Bibek",
                location:"Bengal",
                url:"bibek-photos"
            }
        }
    }
    
    async componentDidMount(){
        const data= await fetch(" https://api.github.com/users/bibekghoshh");
        const json= await data.json();
        console.log(json);
        this.setState({userInfo:json});
        console.log(this.state.userInfo);
    }

    render(){
        // const {name, location}=this.props;
        const {count}=this.state;
        const {name,location,avatar_url}=this.state.userInfo;

        return(
        <div className="user-card">
            <p>{name}</p>
            <p>{count}</p>
            <address>{location}</address>
            <img style={{width:120}} src={avatar_url} alt="bibek's photo" />
            <p>bibek7478@gmail.com</p>
            {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increace</button> */}
        </div>)
    }
}

export default UserClass;