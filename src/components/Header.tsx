import { useState } from "react";
import { useFilterBlogPosts } from "../hooks/useFilterUsers";
import RemovedUsers from "../pages/users/components/RemovedUsers";
import SavedUsers from "../pages/users/components/SavedUsers";
import Modal from "./Modal";



const Header = (): JSX.Element=> {
    const { handleFilter, loading } = useFilterBlogPosts();
    const [showSavedUsersModal, setShowSavedUsersModal] = useState(false);
    const [showRemovedUsersModal, setShowRemovedUsersModal] = useState(false);

    return (
        <>
            <header>
                <div className="page-title">
                    Fictus Users - 10HourLabs
                </div>

                <div className="input">
                    <input 
                        name="job_title" 
                        autoComplete="off"
                        type="text" 
                        className="input-text" 
                        placeholder="Filter by job title"
                        onChange={handleFilter}
                        />
                    <input 
                        name="city" 
                        autoComplete="off"
                        type="text" 
                        className="input-text" 
                        placeholder="Filter by city"
                        onChange={handleFilter}
                        />
                    <input
                        name="country" 
                        autoComplete="off"
                        type="text" 
                        className="input-text" 
                        placeholder="Filter by country"
                        onChange={handleFilter}
                    />
                </div>

                <div style={{display: 'flex', gap: '0.5em'}}>
                    <button onClick={()=> setShowSavedUsersModal(true)} type="button" className="btn__saved-users">Saved Users</button>
                    <button onClick={()=> setShowRemovedUsersModal(true)} type="button" className="btn__saved-users">Removed Users</button>
                </div>
            </header>
            
            {loading && <div className="loading">Loading...</div>}

            {
                showSavedUsersModal && 
                <Modal modalTitle="Saved Users Collection" handleCloseModal={()=> setShowSavedUsersModal(false)} >
                    <SavedUsers />
                </Modal>
            }

            {
                showRemovedUsersModal && 
                <Modal modalTitle="Removed Users Collection" handleCloseModal={()=> setShowRemovedUsersModal(false)} >
                    <RemovedUsers />
                </Modal>
            }
            
        </>
    );
};

export default Header;