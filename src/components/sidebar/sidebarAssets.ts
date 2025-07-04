import type { SideLinkTypes } from "./sidebarTypes.ts";
import home_icon from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobile_icon from "../../assets/automobiles.png";
import sports_icon from "../../assets/sports.png";
import entertainment_icon from "../../assets/entertainment.png";
import tech_icon from "../../assets/tech.png";
import music_icon from "../../assets/music.png";
import blogs_icon from "../../assets/blogs.png";
import news_icon from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from '../../assets/cameron.png';


export const sidebar_1: SideLinkTypes[] = [
    { name: "Home", icon: home_icon, id: 0 },
    { name: "Game", icon: game_icon, id: 20 },
    { name: "Automobile", icon: automobile_icon, id: 2 },
    { name: "Sport", icon: sports_icon, id: 17 },
    { name: "Entertainment", icon: entertainment_icon, id: 24 },
    { name: "Tech", icon: tech_icon, id: 28 },
    { name: "Music", icon: music_icon, id: 10 },
    { name: "Blogs", icon: blogs_icon, id: 22 },
    { name: "News", icon: news_icon, id: 25 }
]
export const sidebar_2: SideLinkTypes[] = [
    { name: "PewDiePie", icon: jack },
    { name: "MrBeast", icon: simon },
    { name: "Justin Bieber", icon: tom },
    { name: "5-Minuts Crafts", icon: megan },
    { name: "Nas Daily", icon: cameron }
]

