import UsersBody from "./UsersBody";
import UsersHeader from "./UsersHeader";


const UsersContainer=(props)=> {

    const {users}=props;

    return (
        <div className="container">

            <h1>Users List</h1>

            <UsersHeader />
            <UsersBody users={users} removeUser={props.removeUser} />

        </div>    
    )

}

export default UsersContainer;