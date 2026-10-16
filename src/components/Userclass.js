import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   count: 0,
    //   count2: 2,
      userInfo:{
        name : "dummy",
        location : "default",
        avatar_url: null,
      },
    };
    // console.log("child-constructor - "+ this.props.name);
  }

 async componentDidMount(){
    // console.log("child component did mount - "+ this.props.name)



        const data = await fetch("https://api.github.com/users/akashbhaskar2011");
        const json = await data.json()
        
        this.setState({
            userInfo :json
        })
        console.log(data)


    //api call happen here
  }

  componentDidUpdate(){
    console.log("domonent did update")
  }

  componentWillUnmount(){
    console.log("component umounted")
  }
  render() {
    const { name , location , avatar_url} = this.state.userInfo;
    let { count, count2 } = this.state;
    // console.log("child- render- "+ this.props.name);
    return (
      <div className="user-card">
        {/* <h1>count : {this.state.count}</h1>
        <h1>count 2 : {count2}</h1> */}

        {/* <button
          onClick={() => {
            //nver update state variable directly
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          count++
        </button> */}
        <img src={avatar_url} className="avatar-amage"></img>
        <h2>{name}</h2>
        <h3>{location|| "Patna"}</h3>
        
        {/* <h3>location</h3>
        <h3>location</h3> */}
      </div>
    );
  }
}

export default UserClass;
