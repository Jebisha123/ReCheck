import "./Header.css"
import "./Card.js"
import App from "../App"
import Card from "./Card.js"
import CardContent from "./CardContent"
import React,{useState} from 'react'

function Header()
{ const moviesList=[
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
   
    
      const[movie,setMovie]=useState(moviesList)
      const onlyMovie =(type)=>{
        let newmovie=moviesList.filter((movitem)=>movitem.type==type)
        setMovie(newmovie)
       
        }
        const onlyCartoon =(type)=>{
            let newCartoon =moviesList.filter((caritem)=>caritem.type==type)
            setMovie(newCartoon)
      }
      const allList =() =>{
        setMovie(moviesList)

      }
    
        return(
        <>
          <div class="subheader">
          <div>
    <button onClick={()=>onlyMovie("Film")}>Movies</button>
        <button onClick={()=>onlyCartoon("Cartoon")}>Cartoon</button>
        <button onClick={allList}>All</button></div>
    </div>
          
           
        {
            movie.map((movitem)=>{
                return(
                    <>
                  
        <div className="container">
          
            { <h4 className="title">{movitem.title}</h4> }
      <div className="image">
           <img src={movitem.img} alt=""/></div></div>
          
        

        
         
                    {/* <div><h4>{movitem.title}</h4></div>
                    <div><a><img className="image_card"   src={movitem.img} alt=""/></a></div> */}
                    </>
                )
            })
        }
      
    

        </>
        )
    }


    export default Header;
