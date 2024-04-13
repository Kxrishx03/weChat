import logo from './icons/logo.png';

export function OnlineUsers(){
    return (
        <div className="list-cont">
            <div className="list-cont-header">
               <div >
               <img className='list-icon' src={logo} alt="logo" />
               </div>
               <div className='list-title'>
               <p >Online Users</p>
               </div>

            </div>

        </div>
    )
}