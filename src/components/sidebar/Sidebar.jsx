import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FestivalIcon from '@mui/icons-material/Festival';
import LuggageIcon from '@mui/icons-material/Luggage';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export default function TopBar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Ispiration</span>
                    </li>
                    <li className="sidebarListItem">
                        <FestivalIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Top events</span>
                    </li>
                    <li className="sidebarListItem">
                        <LuggageIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">New adventure</span>
                    </li>
                </ul>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/imgs/oxi.jpg" alt="" />
                        <span className="sidebarFriendName">Oxi Ciccocelli</span>

                    </li>
                </ul>

            </div>
        </div>
    )
}