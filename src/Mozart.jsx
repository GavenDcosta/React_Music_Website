import Music from './Music'
import data from './data'

export default function Mozart(){
    const requiredData = data.filter((item) => {
        return item.Composer == "Mozart"
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
                    <img src="https://i.pinimg.com/originals/0a/ae/f9/0aaef949dda2528297e2052980daf070.jpg" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">Wolfgang Amadeus Mozart</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}