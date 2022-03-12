import { throwStatement } from "@babel/types";
import React ,{Component} from "react";


class CreateUser extends React.Component{
    
    intialState = {
        name: "",
        age: ""
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
                <div className="col-md-3">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="name" value={name} className="form-control" onChange={this.formUser} />
                </div>
            </div>
                <div className="row mt-2">
                    <div className="col-md-3">
                        <label htmlFor="">Age</label>
                        <input type="text" name="name" id="name" value={age} className="form-control" onChange={this.formUser} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-3">
                       <button className="btn btn-primary" onClick={this.addUser}>Submit</button>
                    </div>
                </div>
            </form>

        )

    }
}

export default CreateUser;