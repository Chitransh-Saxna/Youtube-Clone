import { Link } from "react-router-dom"
import "./Feed.css"
import type { FeedPropType, Items } from "./feetTypes"
import { API_KEY, valueConverter } from "../../data"
import { useEffect, useState } from "react"
import moment from "moment"

const Feed = ({ category }: FeedPropType) => {

    const [data, setData] = useState<Items>([])

    const fetchData = async () => {
        const videoList_url: string = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

        const responseJson = await fetch(videoList_url)
        const response = await responseJson.json()
        setData(response.items)
    }

    useEffect(() => {
        fetchData()
    }, [category])

    return (
        <div className="feed">
            {data && data.map((items) => (
                <Link to={`video/${items.snippet.categoryId}/${items.id}`} className="card">
                    <img src={items.snippet.thumbnails.medium.url} alt="" />
                    <h2>{items.snippet.title}</h2>
                    <h3>{items.snippet.channelTitle}</h3>
                    <p>{valueConverter(items.statistics.viewCount)} views &bull; {moment(items.snippet.publishedAt).fromNow()}</p>
                </Link>
            ))}
        </div>
    )
}

export default Feed