import { useCallback, useContext, useEffect, useRef } from "react";
import { UsersContext, usersType } from "../contexts/usersContext/UsersContext";
import { fetchHelper } from "../helpers/fetchHelper";
import { fictusUrl } from "../helpers/constants/urls";

export type UsersResult = {
    users: usersType
}



export const useFetchUsers = (): UsersResult => {
    const { users, addUsers } = useContext(UsersContext);
    const fetchedUsers = useRef(false);

    
    const fetchUsers = useCallback(async ()=> {
        const url = `${fictusUrl}`;
        const {success, data, error} = await fetchHelper(url, 'GET');

        if(!fetchedUsers.current){
            if(success && data) {
                addUsers(data['items']);
            } else if (error && !success ) {
                addUsers([]);
            }
        }


        if((data && success) || error) {
            fetchedUsers.current = true;
        }


    }, [addUsers]);

    
    useEffect(()=> {
        if(!fetchedUsers.current){
            fetchUsers();
        }

    }, [fetchUsers]);

    return {
        users
    };
};