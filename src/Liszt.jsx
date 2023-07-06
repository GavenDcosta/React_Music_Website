import Music from './Music'
import data from './data'

export default function Liszt(){
    const requiredData = data.filter((item) => {
        return item.Composer == "Liszt"
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
                    <img src="https://lastfm.freetls.fastly.net/i/u/ar0/678d080a050f47e6c3da1b08bc0b63d3.jpg" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">Franz Liszt</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}