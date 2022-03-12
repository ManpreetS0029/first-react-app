import UsersBody from "./UsersBody";
import UsersHeader from "./UsersHeader";


const UsersContainer=(props)=> {

    const {users}=props;

    return (
        <div className="container">

            <div className="mt-4">
                <h1>Users List</h1>
            </div>

            <UsersHeader />
            <UsersBody users={users} removeUser={props.removeUser} />

        </div>    
    )

}

export default UsersContainer;