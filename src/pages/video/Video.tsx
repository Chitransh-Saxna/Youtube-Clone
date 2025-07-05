import { useParams } from "react-router-dom"
import PlayVideo from "../../components/play_video/PlayVideo.tsx"
import Recommended from "../../components/recammended/Recommended.tsx"
import "./Video.css"

const Video = () => {

    const { categoryId } = useParams()

    return (
        <div className="play-container">
            <PlayVideo />
            <Recommended categoryId={Number(categoryId)} />
        </div>
    )
}

export default Video