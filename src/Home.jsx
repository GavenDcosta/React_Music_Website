import './App.css'
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import homeData from './homeData'


function Card(props){
  return(
    <div className="Card">
      <Link to={props.url}>
         <div className="card">
           <img src={props.img} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h2 className="card-text">{props.name}</h2>
           </div>
         </div>
      </Link>      
    </div>
)

}


export default function Home(){

   const cards = homeData.map((item) => {
      return(
        <Card
             url = {item.url} 
             img = {item.img}
             name = {item.name}
        />
      )
   })

    return(
      <div className="Home">
        {cards}
      </div>     
    )
}