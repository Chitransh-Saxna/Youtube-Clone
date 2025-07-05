import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { imgVideos } from "./playVideo"
import moment from "moment"
import "./PlayVideo.css"
import type { VideoApiType, ChannelDataTypes, CommentDataType } from "./playVideoTypes.ts"
import { API_KEY, valueConverter } from "../../data.ts"

const PlayVideo = () => {
    const { videoId } = useParams()

    const [apiData, setApiData] = useState<VideoApiType>(null)
    const [channelData, setChannelData] = useState<ChannelDataTypes>(null);
    const [commentData, setCommentData] = useState<CommentDataType>(null)

    async function fetchVideoData() {
        const videoDetails_URL: string = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        const responseJson = await fetch(videoDetails_URL)
        const response = await responseJson.json()
        setApiData(response.items[0])
    }

    async function fetchAutherData() {
        const chennalData_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`
        const responseJson = await fetch(chennalData_URL)
        const response = await responseJson.json()
        setChannelData(response?.items[0])

        const comment_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        const commentRsponseJson = await fetch(comment_URL)
        const commentRespmnse = await commentRsponseJson.json()
        setCommentData(commentRespmnse.items)
    }

    useEffect(() => {
        fetchVideoData()
    }, [videoId])

    useEffect(() => { fetchAutherData() }, [apiData])

    return (
        <div className="play-video">
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData?.snippet.title}</h3>
            <div className="play-video-info">
                <p>{apiData && valueConverter(apiData?.statistics.viewCount)} Views &bull; {apiData && moment(apiData?.snippet.publishedAt).fromNow()}</p>
                <div>
                    <span><img src={imgVideos.link} alt="like" />{apiData && valueConverter(apiData?.statistics.likeCount)}</span>
                    <span><img src={imgVideos.dislike} alt="dislike" />2</span>
                    <span><img src={imgVideos.share} alt="share" />Share</span>
                    <span><img src={imgVideos.save} alt="save" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?.snippet.thumbnails.default.url} alt="profile" />
                <div>
                    <p>{apiData?.snippet.channelTitle}</p>
                    <span>{channelData && valueConverter(channelData?.statistics.subscriberCount)} Subscribers</span>
                </div>
                <button>Subscrib</button>
            </div>
            <div className="vid-description">
                <p>{apiData?.snippet.description}</p>
                <hr />
                <h4>{apiData && valueConverter(apiData?.statistics.commentCount)} Comments</h4>
                <div className="comment">
                    <img src={imgVideos.user_profile} alt="profile" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Nice video</p>
                        <div className="comment-action">
                            <img src={imgVideos.link} alt="like" /><span>244</span>
                            <img src={imgVideos.dislike} alt="dislike" />
                        </div>
                    </div>
                </div>
                {commentData && commentData.map((item, index) => (
                    <div className="comment" key={index}>
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="profile" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.publishedAt).fromNow()}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={imgVideos.link} alt="like" /><span>{valueConverter(item.snippet.topLevelComment.likeCount)}</span>
                                <img src={imgVideos.dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default PlayVideo