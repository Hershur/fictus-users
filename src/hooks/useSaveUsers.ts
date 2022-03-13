import { useContext } from "react";
import { UsersContext } from "../contexts/usersContext/UsersContext";

const useSaveUsers = ()=> {
    const { users, usersSaved, saveUsers } = useContext(UsersContext);


    const handleSaveUsers = (id: string) => {
        const getUserById = users.find(user => user.uuid === id);

        saveUsers([...usersSaved, getUserById]);
    }


    return {
        handleSaveUsers
    }
};


export default useSaveUsers;