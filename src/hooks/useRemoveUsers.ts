import { useContext } from "react";
import { UsersContext } from "../contexts/usersContext/UsersContext";

const useRemoveUsers = ()=> {
    const { users, addUsers, usersRemoved, removeUsers } = useContext(UsersContext);


    const handleRemoveUsers = (id: string) => {
        const getUserById = users.find(user => user.uuid === id);
        const filteredUser = users.filter(user => user.uuid !== id);

        removeUsers([...usersRemoved, getUserById]);
        addUsers(filteredUser);
    }


    return {
        handleRemoveUsers
    }
};


export default useRemoveUsers;