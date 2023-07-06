import Music from './Music'
import data from './data'

export default function Paganini(){
    const requiredData = data.filter((item) => {
        return item.Composer == "Paganini"
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
                    <img src="https://www.elsiglodetorreon.com.mx/m/i/2018/10/1110597.jpeg" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">Niccolò Paganini</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}