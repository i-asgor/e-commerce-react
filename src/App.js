import './App.css';
import Header from './Pages/Header/Header';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={''} />
      </Routes>

    </>
  );
}

export default App;
