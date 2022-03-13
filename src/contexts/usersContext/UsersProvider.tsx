import { useState } from 'react';
import { usersDefaultValues, usersType, UsersContext } from './UsersContext';


export const UsersProvider = ({ children }: {children: JSX.Element}) => {
    const [users, setUsers] = useState<usersType>(usersDefaultValues.users);
    const [usersSaved, setUsersSaved] = useState<usersType>(usersDefaultValues.users);
    const [usersRemoved, setUsersRemoved] = useState<usersType>(usersDefaultValues.users);
  
    const addUsers = (users: usersType) => setUsers(users);
    const saveUsers = (users: usersType) => setUsersSaved(users);
    const removeUsers = (users: usersType) => setUsersRemoved(users);
  
    return (
        <UsersContext.Provider
            value={{
                users,
                addUsers,
                usersSaved,
                saveUsers,
                usersRemoved,
                removeUsers
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};