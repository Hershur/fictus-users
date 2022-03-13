import { useContext } from "react";
import { UsersContext } from "../contexts/usersContext/UsersContext";

const useRestoreUser = ()=> {
    const { users, addUsers, usersRemoved, removeUsers } = useContext(UsersContext);


    const handleRestoreUsers = (id: string) => {
        const getUserById = usersRemoved.find(user => user.uuid === id);
        const filteredUser = usersRemoved.filter(user => user.uuid !== id);

        removeUsers(filteredUser);
        addUsers([...users, getUserById]);
    }


    return {
        handleRestoreUsers
    }
};


export default useRestoreUser;