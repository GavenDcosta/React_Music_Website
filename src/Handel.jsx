import Music from './Music'
import data from './data'

export default function Handel(){
    const requiredData = data.filter((item) => {
        return item.Composer == "Handel"
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
                    <img src="https://1.bp.blogspot.com/-90mEYKt3Wyc/Wdgc9uXlNkI/AAAAAAAABWQ/lrzch_d6R9wxKWQcWlpHJVTEXQfix5ftACEwYBhgL/s1600/handelmain.jpg" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">George Frideric Handel</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}