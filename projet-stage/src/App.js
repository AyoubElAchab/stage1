import React from 'react';
import { Header } from './sections/index';
import { Container} from './components/index';
import {Routes,Route} from 'react-router-dom';
import './App.css' 
import { AfficherPlaintes, Home, InsertPlainte, PlaintesFini, PlaintesNoFini, SearchPlaintes } from './pages/index';


export default function App() {
  return (
     <div>
      
        <Header/>
        <Container >
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/insertPlaintes' element={<InsertPlainte />} />
               <Route path='/afficherplaintes' element={<AfficherPlaintes />} />
               <Route path='/searchPlaintes' element={<SearchPlaintes />} />
               <Route path='/plaintesnofini' element={<PlaintesNoFini/>} />
               <Route path='/plaintesfini' element={<PlaintesFini />} />
            </Routes>
        </Container>
     </div>
  )
}


