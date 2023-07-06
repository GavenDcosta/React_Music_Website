import Music from './Music'
import data from './data'

export default function Bach(){
    const requiredData = data.filter((item) => {
        return item.Composer == "Bach"
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
                    <img src="https://tse4.mm.bing.net/th?id=OIP.uI3iyvk9UQ4xM8xW8bE01QHaEK&pid=Api&P=0&h=180" alt="" className="info-img" />
                    <marquee width="100%" direction="left" height="100px">Johann Sebastian Bach</marquee>
            </div>
            <div className="songs">
                {cards}
            </div>
            
        </div>
    )
}