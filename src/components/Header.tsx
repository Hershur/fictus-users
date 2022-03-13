import { useFilterBlogPosts } from "../hooks/useFilterUsers";



const Header = (): JSX.Element=> {
    const { handleFilter, loading } = useFilterBlogPosts();

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

                <div>
                    <button type="button" className="btn__saved-users">Saved Users</button>
                </div>
            </header>
                
            {loading && <div className="loading">Loading...</div>}
        </>
    );
};

export default Header;