import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"

export default function TopBar(){
    return (
        <nav className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">GGita</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder= "Search for a great adventure...." className="searchinput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home page</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>                  
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>   
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>   
                </div>
                <img src="/assets/imgs/fabri.jpg" alt="" className="topbarImg"/>
            </div>
        </nav>
    ) 
}