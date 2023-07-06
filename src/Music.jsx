import './App.css'

export default function Music(props){
    return(
        <div className="Card">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-text">{props.name}</h2>
                   <div className="audio-wrapper"><audio src={props.song} autoplay loop controls></audio></div> 
                </div>
            </div>      
        </div>
    )
}