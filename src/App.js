import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import {Fetch} from "./components/Api/Api"
import Show from './components/RowData/Show';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import HeadSection from './components/HeadSection/HeadSection';
import { isLogin } from './Recoil';

function App() {
  
    const isUserLoggedIn = useRecoilValue(isLogin);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isUserLoggedIn) {
        navigate("/");
      }
    });
  return (
    // <div className="App">
    <>
    <div style={{backgroundColor:'black'}}>
    <HeadSection/>
     <Header/> 
     <Show title="Netflix Originals" Data={Fetch.fetchNetflixOriginals} isLargeRow={true}/>
     <Show title="Trending Now" Data={Fetch.fetchTrending}/>
     <Show title="Top Rated" Data={Fetch.fetchTopRated}/>
     <Show title="Action Movies" Data={Fetch.fetchActionMovies}/>
     <Show title="Comedy Movies" Data={Fetch.fetchComedyMovies}/>
     <Show title="Horror Movies" Data={Fetch.fetchHorrorMovies}/>
     <Show title="Romance movies" Data={Fetch.fetchRomanceMovies}/>
     <Show title="Documentries" Data={Fetch. fetchDocumantaries}/>
     <hr/>
     <Footer/>
     </div>
     </>

  );
}

export default App;
