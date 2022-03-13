import { useContext, useState } from "react";
import { UsersContext } from "../contexts/usersContext/UsersContext";
import { fictusUrl } from "../helpers/constants/urls";
import { fetchHelper } from "../helpers/fetchHelper";

export const useFilterBlogPosts = ()=> {
    const { addUsers } = useContext(UsersContext);
    const [loading, setLoading] = useState(false);


    const handleFilter = async (e: { target: HTMLInputElement })=> {
        setLoading(true);
        const value = e.target.value.toLocaleLowerCase();
        const name = e.target.name;
        let job_title = '', city = '', country = '';

        switch(name) {
            case 'job_title':
                job_title = value;
                break;
            case 'city':
                city = value;
                break;
            case 'country':
                country = value;
                break;
        }


        
        const url = `${fictusUrl}?job_title=${job_title}&city=${city}&country=${country}`;

        const {success, data, error} = await fetchHelper(url, 'GET');

        if(success && data) {
            addUsers(data['items']);
            setLoading(false);
        } else if (error && !success ) {
            addUsers([]);
            setLoading(false);
        }
        
    };

    return {
        handleFilter,
        loading
    }
};