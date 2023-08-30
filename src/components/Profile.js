const Profile = (props) => {
    return(
        <>
        <h1>Profile Class component</h1>
        <h3>This website is built using swiggy API</h3>
        {props.name}
        </>
    )
}
export default Profile;