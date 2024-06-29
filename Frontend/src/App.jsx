import './App.css'
import { Login } from './components/Login'
import { MainContainer } from './components/MainContainer'
import { Routes, Route } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { ChatArea } from './components/ChatArea';
import { CreateGroups } from './components/CreateGroups';
import { Users } from './components/Users';
import { Groups } from './components/Groups';
import { OnlineUsers } from './components/OnlineUsers';
import { Signup } from './components/Signup';
import { Toaster } from 'react-hot-toast';
function App() {


  return (
    <>
      <div className='app_container'>
        <Toaster />
        <Routes >
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path='app' element={<MainContainer />}>
            <Route path='welcome' element={<Welcome />} />
            <Route path='chat' element={<ChatArea />} />
            <Route path='users' element={<Users />} />
            <Route path='online-users' element={<OnlineUsers />} />
            <Route path='groups' element={<Groups />} />
            <Route path='create-groups' element={<CreateGroups />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
