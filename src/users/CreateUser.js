import React, { Component } from "react";


class CreateUser extends Component{
    
    intialState = {
        name: "",
        age: ''
    }

    state=this.intialState;

    formUser=(event)=>{
        const {name,value}=event.target;
        this.setState(
            {
                [name]:value,
            })
    

            console.log(this.state);

        }

        addUser=()=>{
            
            this.props.addUser(this.state);
            this.setState(this.intialState);
        
        }

    render(){

        const {name,age}=this.state;

    
        return(

            <form>
                <div className="row">
                    <div className="col">
                        <h1>Add User</h1>
                    </div>
                </div>
            <div className="row mt-2">
                <div className="col-md-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} className="form-control" onChange={this.formUser} />
                </div>
                <div className="col-md-4">
                        <label htmlFor="age">Age</label>
                        <input type="text" name="age" id="age" value={age} className="form-control" onChange={this.formUser} />
                    </div>
            
               
                    <div className="col-md-4 mt-4">
                       <input type="button" className="btn btn-primary" onClick={this.addUser} value="Submit" />
                    </div>
                </div>
            </form>

        )

    }
}

export default CreateUser;