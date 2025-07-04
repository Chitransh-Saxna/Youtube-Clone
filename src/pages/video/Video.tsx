import { useParams } from "react-router-dom"
import PlayVideo from "../../components/play_video/PlayVideo.tsx"
import Recommended from "../../components/recammended/Recommended.tsx"
import "./Video.css"

const Video = () => {

    const { videoId, categoryId } = useParams()

    return (
        <div className="play-container">
            <PlayVideo videoId={videoId as string}  />
            <Recommended categoryId={categoryId as string} />
        </div>
    )
}

export default Video