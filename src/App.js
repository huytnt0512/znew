import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './page/DefaultLayout/DefaultLayout';
import Login from './page/LoginPage/Login';
import AdminPage from './page/AdminPage/AdminPage';
// import MyClass from './page/AdminPage/MyClass';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/*' element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
