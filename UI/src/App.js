import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import milk from './static/icons/milk.png';
import cow from './static/icons/cow.png';
import personal from './static/icons/personal.png';
import './static/scss/app.scss';
import { useEffect, useState } from 'react';

// let isWindowFocus = true;
function App() {
  let [isWindowFocus, setIsWindowFOcus] = useState(true);

  useEffect(() => {
    window.addEventListener("focus", () => {setIsWindowFOcus(true)})
    window.addEventListener("blur", () => {setIsWindowFOcus(false)})
    document.onBlur(() => {
      setIsWindowFOcus(false)
    })
    return () => {
        window.removeEventListener('focus', setIsWindowFOcus)
        window.removeEventListener('blur',setIsWindowFOcus)
    }
},[])

useEffect(() =>{
  console.log(isWindowFocus)
})

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="make-all-center">
            <div className='header-content'>
              <ul className='header-lists'>
                <li> Welcome </li>
                <li> <Link to="/"> <img className='border-circle' src={milk}></img> <label> Milks </label> </Link></li>
                <li> <Link to="/cows"> <img className='border-circle' src={cow}></img> <label> Cows </label> </Link></li>
                <li> <Link to="/person_details"> <img src={personal}></img> <label> Details </label> </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
