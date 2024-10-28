
const User = ({user}) => {
    console.log(user)
    const {name, email, phone} = user
    const userStyle = {
        border:"2px solid yellow",
        padding: "20px",
        borderRadius: "20px"
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            
        </div>
    );
};

export default User;