import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {id,name, email, website} = userDetails;
    const navigate = useNavigate()

    const handleBack= ()=>{
        navigate(-1)
    }

    const userStyle = {
        border:"2px solid yellow",
        padding: "20px",
        borderRadius: "20px"
    }
    return (
        <div style={userStyle}>
            <p>User Id:- {id}</p>
            <h2>User Name: {name}</h2>
            <p>website:- {website}</p>
            <p>website:- {email}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;