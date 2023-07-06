import './App.css'
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home';
import Beethoven from './Beethoven';
import Chopin from './Chopin';
import Fav from './Fav';
import Paganini from './Paganini';
import Mozart from './Mozart';
import Handel from './Handel';
import Bach from './Bach';
import Evgeny from './Evgeny';
import Liszt from './Liszt';

function App() {

  return (
         <div className="App">
          <nav className="navbar navbar-dark bg-dark fixed-top">
           <div className="container-fluid">
            <img src="http://wallpapercave.com/wp/JtAYpie.jpg" className='logo' alt="" />
             <h1 className="navbar-brand">Classical-Glory</h1>
             <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
               <div className="offcanvas-header">
                 <h3 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Composers</h3>
                 <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div className="offcanvas-body">
                 <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Beethoven">Ludwig Van Beethoven</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Mozart">Wolfgang Amadeus Mozart</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Chopin">Frédéric François Chopin</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Liszt">Franz Liszt</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Paganini">Niccolò Paganini</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Bach">Johann Sebastian Bach</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Handel">George Frideric Handel</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Evgeny">Evgeny Khmara</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Fav">Mix</Link>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </nav> 

      <div className="body"> 
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Beethoven' element={<Beethoven/>}/>
          <Route path='/Mozart' element={<Mozart/>}/>
          <Route path='/Chopin' element={<Chopin/>}/>
          <Route path='/Bach' element={<Bach/>}/>
          <Route path='/Handel' element={<Handel/>}/>
          <Route path='/Paganini' element={<Paganini/>}/>
          <Route path='/Liszt' element={<Liszt/>}/>
          <Route path='/Evgeny' element={<Evgeny/>}/>
          <Route path='/Fav' element={<Fav/>}/>
      </Routes>

      </div>

    </div>


  )
}

export default App
