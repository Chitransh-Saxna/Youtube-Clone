import "./Sidebar.css"
import type { SideLinkTypes, SidebarPropType } from "./sidebarTypes.ts"
import { sidebar_1, sidebar_2 } from "./sidebarAssets.ts"

const Sidebar = ({ sidebar, category, setCategory }: SidebarPropType) => {
    return (
        <div className={`sidebar ${sidebar && "small-sidebar"}`}>
            <div className="shortcut-links">
                {sidebar_1 && sidebar_1.map(({ name, icon, id }, index) => (
                    <div className={`side-link ${category === id ? "active" : ""}`} key={index} onClick={() => setCategory(id as number)}>
                        <img src={icon} alt={icon} /><p>{name}</p>
                    </div>
                ))}
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                {sidebar_2 && sidebar_2.map(({ name, icon }: SideLinkTypes, index) => (
                    <div className="side-link" key={index}>
                        <img src={icon} alt={icon} /><p>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Sidebar