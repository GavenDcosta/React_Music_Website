import Music from './Music'
import data from './data'

export default function Evgeny(){
    const requiredData = data.filter((item) => {
        return item.Composer == "Evgeny"
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
                    <img src="https://static.sky.it/images/skytg24/it/spettacolo/musica/2022/03/11/evgeny-khmara-suona-sfollati-ucraina/evgeny-khmara_wikipedia.jpg" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">Evgeny Khmara</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}