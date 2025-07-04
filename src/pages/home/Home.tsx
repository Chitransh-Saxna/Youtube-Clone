import { useState } from "react"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Home.css"
import type { HomePropType } from "./homeTypes"

const Home = ({ sidebar }: HomePropType) => {

    const [category, setCategory] = useState<number>(0)

    return (
        <>
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
            <div className={`container ${sidebar && "large-container"}`}>
                <Feed category={category}  />
            </div>
        </>
    )
}

export default Home