import "./MovieMain.css"
import "./CardContent.js"
import CardContent from "./CardContent.js";
import Header from "./Header";
import { ReactDOM } from "react";
function Card(props)
{
    
   
    return(
    
   
        <> 

            <img className="image_card"   src={props.Img} alt=""/>
        
           
           {/* <h5>Year:  {props.year} <br/>
            Movie Name:  {props.Heading} </h5>   */}
        

    </>
    
    
     
    
    )
    }
    export default Card;