import { useEffect, useState } from "react"
import type { RecommendedPropType, RecommendedVideoType } from "./recomendedTypes.ts"
import "./Recommended.css"
import { API_KEY, valueConverter } from "../../data.ts"
import { Link } from "react-router-dom"


const Recommended = ({ categoryId }: RecommendedPropType) => {

    const [apiData, setAPIData] = useState<RecommendedVideoType>([])

    async function fetchData() {
    
        const api_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const responseJson = await fetch(api_URL);
        const response = await responseJson.json();
        setAPIData(response.items)
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div className="recommended">
            {apiData && apiData.map((items, index) => (
                <Link to={`/video/${items.snippet.categoryId}/${items.id}`} className="side-video-list" key={index}>
                    <img src={items.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{items.snippet.title}</h4>
                        <p>{items.snippet.channelTitle}</p>
                        <p>{valueConverter(items.statistics.viewCount)} Viwes</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Recommended