import './App.css';
import Header from './Pages/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Pages from './Pages/MainPage/Pages';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Pages />} />
      </Routes>

    </>
  );
}

export default App;
