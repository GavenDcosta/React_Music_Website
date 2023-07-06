import Music from './Music'
import data from './data'

export default function Fav(){
    const requiredData = data.filter((item) => {
        return item.Composer == "Mix"
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
                    <img src="https://tse3.mm.bing.net/th?id=OIP.3ORWVfCPL_ijh1P-Gz6__AHaFO&pid=Api&P=0&h=180" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">Mix</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}