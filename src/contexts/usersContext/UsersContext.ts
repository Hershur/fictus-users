import { createContext } from 'react';


export type usersType =  Array<any>;

type usersContextState = {
    users: usersType;
    addUsers: (users: usersType ) => void;
    usersSaved: usersType;
    saveUsers: (users: usersType ) => void;
    usersRemoved: usersType;
    removeUsers: (users: usersType ) => void;
};

export const usersDefaultValues: usersContextState = {
    users: [],
    addUsers: (users: usersType) => {},
    usersSaved: [],
    saveUsers: (users: usersType) => {},
    usersRemoved: [],
    removeUsers: (users: usersType) => {},
};


export const UsersContext = createContext<usersContextState>(usersDefaultValues);
