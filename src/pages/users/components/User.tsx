
interface IUser {
    userName: string;
    email: string;
    imgSrc: string;
    jobTitle: string;
    city?: string;
    country?: string;
};

const User = ({userName, email, imgSrc, jobTitle, city, country}: IUser): JSX.Element  => {

    return (
        <div className="card">
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
                        <small>2h ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default User;
