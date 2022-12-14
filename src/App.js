import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/home' element={<Home />}></Route>
         <Route path='/review' element={<Review />}></Route>
         <Route path='/dashboard' element={<Dashboard />}></Route>
         <Route path='/blogs' element={<Blogs />}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
