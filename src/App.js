import { Route, Routes } from 'react-router-dom';
import './global.css'
import Home from './pages/Home'
import Blog from './components/Blog'
import Products from './components/Products'
import Price from './components/Price'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useSelector } from 'react-redux';
function App() {
  const signed_state = useSelector((state) => state.user.loggedInState);
  return (
    <Routes>
      { signed_state ? (
      <Route path='/' element={<Home/>}>
        <Route path ='/blog' element={<Blog/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/price' element={<Price/>}/>
      </Route>
      ): (
        <>
        <Route index path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </>
      )}
       <Route path="/*" element={<h1>Page not found</h1>} />
    </Routes> 
  );
}

export default App;
