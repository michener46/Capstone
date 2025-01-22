import './SSOTab.css';

function SSOTab(){
    let users = ['Owen Michener', 'Mary Kathryn Kahl'];

    return(
        <div id="sso-tab">
            <div id="active-users">
                {users.map((user, index) => (
                    <button class="user-button" id={"user-tab"+index} onClick={console.log("user")}>
                        <span class="profile-placeholder"></span>
                        <p class="user-name">{user}</p>
                        <button onClick={console.log("user")}>Sign Out</button>
                    </button>
                ))}
            </div>
            <div id="sso-navigation-buttons-tab">
                <button id="nav-button">Other Account</button>
                <button id="nav-button">Sign Out All</button>
            </div>
        </div>
    );
}

export default SSOTab;