import Music from './Music'
import data from './data'

export default function Chopin(){
    const requiredData = data.filter((item) => {
        return item.Composer == "Chopin"
    })

    const cards = requiredData.map((item) => {
        return(
           <Music
              img = {item.img}
              name = {item.name}
              song = {item.song}
           />                
        )      
    })

    return(
        <div className="music">
            <div className="info">
                    <img src="https://www.thefamouspeople.com/profiles/images/frdric-chopin-8.jpg" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">Frédéric François Chopin</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}