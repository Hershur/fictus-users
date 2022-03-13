import Header from "../../components/Header";
import UsersBox from "../../components/UsersBox";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import User from './components/User';


const Users = ()=> {
    const { users } = useFetchUsers();

    return (
        <div className="users">
            <Header />

            <UsersBox>
                <>
                    {
                        users?.length > 0 ?
                        users.map((user, i) => (
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
                            />
                        ))  :
                        <div style={{textAlign: 'center', width: '80%', margin: 'auto'}}>No user found</div>
                    }
                </>
            </UsersBox>
        </div>
    );
};


export default Users;
