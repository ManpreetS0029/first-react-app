import React from "react";
import UsersContainer from "./users/UsersContainer";

class App extends React.Component{

      state={
      
      userData:[
        {

        name: 'John',
        age: 30

      },

      {

        name: 'Chris',
        age: 50

      },
      
      {

        name: 'Micheal',
        age: 20

      },

      {

        name: 'Thomas',
        age: 35

      },

      {

        name: 'Arthur',
        age: 40
      
      }

      ]

    }

  removeUser=(index)=>{
    const {userData} = this.state;
    const data = userData.filter((value,i)=>{

    return index!=i;

    });

    this.setState({userData:data});

  }  


  render()
  {

    const {userData} = this.state;

    return(
     <UsersContainer users={userData} removeUser={this.removeUser} />
    )
  }
}


export default App;