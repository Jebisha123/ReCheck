
import './App.css';
import Header from './component/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  const moviesList=[
    {
      title:"Titanic",
      year:2003,
      poster:"http",
      img:"./Titanic.jpeg",
      type:"Film"
    },
    {
      title:"StarWars",
      year:1997,
      poster:"http",
      img:"./starwar.jpeg",
      type:"Film"
    },
  
    
    
    {
      title:"American Snipper",
      year:"2020",
      poster:"http",
      img:"./American.jpg",
      type:"Film"
    },
    {
      title:"Peppa Pig",
      year:1993,
      poster:"http",
      img:"./peppapig.jpg",
      type:"Cartoon"
    },
    {
      title:"Mickey Mouse",
      year:1994,
      poster:"http",
      img:"./Disney.jpg",
      type:"Cartoon"
      
    },
    {
      title:"OOgy the Cockroach",
      year:1997,
      poster:"http",
      img:"./OOgy.jpg",
      type:"Cartoon"
      
    },
    {
      title:"Arcane",
      year:1997,
      poster:"http",
      img:"./Arcane.jpg",
      type:"Cartoon"
      
    },
    
    
  ]
  return (
   <>
   <div>
  
   <Header></Header>
   </div>
   
   </>
  
  ); 
}

export default App;
