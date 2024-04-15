import './App.css'
import { Login } from './components/Login'
import { MainContainer } from './components/MainContainer'
import {Routes,Route} from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { ChatArea } from './components/ChatArea';
function App() {


  return (
    <>
      <div className='app_container'>
          <Routes >
            <Route  path="/" element={<Login/>}/>

            <Route  path='app' element={<MainContainer />}>
            <Route path='welcome' element={<Welcome/>}/>
            <Route path='chat' element={<ChatArea/>} />
            </Route>
          </Routes>
           
           
      </div>
    </>
  )
}

export default App
