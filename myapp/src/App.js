import './App.css';
import {Routes,Route} from 'react-router-dom'
import HeaderWrapper from './components/pages/HeaderWrapper';
import Posts from './components/Posts/Posts';
import AddImg from './components/AddImg/AddImg';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HeaderWrapper />}>
            <Route index element={<Posts/>} />
          
            <Route path='add-img' element={<AddImg />}/>
            <Route path='messenges' element={<Chat/>}/>
             <Route path='profile' element={<Profile />}/>
        </Route>
        <Route path='log' element={<Login />}/>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
