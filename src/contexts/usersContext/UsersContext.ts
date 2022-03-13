import { createContext } from 'react';


export type usersType =  Array<any>;

type usersContextState = {
    users: usersType;
    addUsers: (users: usersType ) => void;
};

export const usersDefaultValues: usersContextState = {
    users: [],
    addUsers: (users: usersType) => {}
};


export const UsersContext = createContext<usersContextState>(usersDefaultValues);
