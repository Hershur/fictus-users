import { useState } from 'react';
import { usersDefaultValues, usersType, UsersContext } from './UsersContext';


export const UsersProvider = ({ children }: {children: JSX.Element}) => {
    const [users, setUsers] = useState<usersType>(usersDefaultValues.users);
  
    const addUsers = (users: usersType) => setUsers(users);
  
    return (
        <UsersContext.Provider
            value={{
                users,
                addUsers
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};