import logo from "./icons/logo.png"
export function Welcome(){
    return (
        <div className="welcome-cont">
          
            <img className="welcome-logo" src={logo} alt="logo" />
            <p>View and text directly to people
            present in the chat Rooms</p>
        </div>
    );
}