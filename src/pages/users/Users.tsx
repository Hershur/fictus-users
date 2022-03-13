import Header from "../../components/Header";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import User from './components/User';


const Users = ()=> {
    const { users } = useFetchUsers();

    return (
        <div className="users">
            <Header />
        
            <div className="users-items-box">
                {
                    users?.length > 0 ?
                    users.map((user) => (
                        <User 
                            key={user.uuid}
                            userName={`${user.first_name} ${user.last_name}`}
                            email={user.email}
                            imgSrc={user.profile_picture}
                            jobTitle={user.preferred_job_title}
                            city={user.city}
                            country={user.country}
                        />
                    ))  :
                    <div style={{textAlign: 'center'}}>No user found</div>
                }
                
            </div>
        </div>
    );
};


export default Users;
