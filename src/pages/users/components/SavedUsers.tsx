import { useContext } from "react";
import UsersBox from "../../../components/UsersBox";
import { UsersContext } from "../../../contexts/usersContext/UsersContext";
import User from "./User";

const SavedUsers = ()=> { 
    const { usersSaved } = useContext(UsersContext);

    return (
        <UsersBox>
            <>
                {
                    usersSaved?.length > 0 ?
                    usersSaved.map((user, i) => (
                        <User 
                            index={i}
                            key={user.uuid}
                            id={user.uuid}
                            userName={`${user.first_name} ${user.last_name}`}
                            email={user.email}
                            imgSrc={user.profile_picture}
                            jobTitle={user.preferred_job_title}
                            city={user.city}
                            country={user.country}
                            savedUserModal
                        />
                    ))  :
                    <div style={{textAlign: 'center', width: '80%', margin: 'auto'}}>No user found</div>
                }
            </>
        </UsersBox>
    )
};


export default SavedUsers;