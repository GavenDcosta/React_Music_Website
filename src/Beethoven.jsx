import Music from './Music'
import data from './data'

export default function Beethoven(){

    const requiredData = data.filter((item) => {
        return item.Composer == "Beethoven"
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
                    <img src="https://www.factinate.com/wp-content/uploads/2018/05/26-3.jpg" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">Ludwig Van Beethoven</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}