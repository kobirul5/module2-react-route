import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {id,name, email, website} = userDetails;
    const userStyle = {
        border:"2px solid yellow",
        padding: "20px",
        borderRadius: "20px"
    }
    return (
        <div style={userStyle}>
            <h2>User Name: {name}</h2>
            <p>website:- {website}</p>
            <p>website:- {email}</p>
        </div>
    );
};

export default UserDetails;