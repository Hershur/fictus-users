import { useRef } from "react";
import useRemoveUsers from "../../../hooks/useRemoveUsers";
import useRestoreUser from "../../../hooks/useRestoreUser";
import useSaveUsers from "../../../hooks/useSaveUsers";

interface IUser {
    index: number;
    id: string;
    userName: string;
    email: string;
    imgSrc: string;
    jobTitle: string;
    city?: string;
    country?: string;
    savedUserModal?: boolean;
    removeUserModal?: boolean;
};

const User = ({
    index, 
    id, 
    userName, 
    email, 
    imgSrc, 
    jobTitle, 
    city, 
    country, 
    savedUserModal,
    removeUserModal
}: IUser): JSX.Element  => {
    const saveBtnsRef = useRef<(HTMLElement)[]>([]);
    const { handleSaveUsers } = useSaveUsers();
    const { handleRemoveUsers } = useRemoveUsers();
    const { handleRestoreUsers } = useRestoreUser();
 

    return (
        <div className="card">
            {
                !(savedUserModal) && 
                
                <button 
                    className="btn__remove-user" 
                    type="button"
                    onClick={
                        removeUserModal ? 
                        ()=> handleRestoreUsers(id) : 
                        ()=> handleRemoveUsers(id)
                    } 
                >
                   {removeUserModal ? '+' : savedUserModal ? null : <span>&times;</span> } 
                </button>

            }

            <div className="card-header">

                <img src={imgSrc} alt="cardimage" className="card-image" loading="lazy"/>
            </div>

            <div className="card-body">
                <h4>{userName}</h4>
                <p>{email}</p>
            </div>

            <div className="card-footer">
                <div className="user">
                    <div>
                        {city}, {country}
                    </div>

                    <div className="user-info">
                        <div className="job-title">{jobTitle}</div>
                        
                        {
                            !(savedUserModal || removeUserModal) &&

                            <small 
                                style={{backgroundColor: saveBtnsRef.current[index]?.innerText === 'Saved' ? 'green' : '' }}
                                ref={el => ((saveBtnsRef.current[index] as HTMLElement) as any) = el}
                                onClick={
                                    saveBtnsRef.current[index]?.innerText !== 'Saved' ? 
                                    ()=> { saveBtnsRef.current[index].innerText = 'Saved'; handleSaveUsers(id)} :
                                    undefined
                                }
                            >
                                { saveBtnsRef.current[index]?.innerText !== 'Saved' ? 'Save' : 'Saved'}
                            </small>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default User;
