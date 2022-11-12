import "./sidebar.css"
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import LuggageIcon from '@mui/icons-material/Luggage';
import HouseIcon from '@mui/icons-material/House';
import HelpIcon from '@mui/icons-material/Help';
import GroupIcon from '@mui/icons-material/Group';
export default function TopBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <HouseIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Current activities</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <LuggageIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Start new trip</span>
                    </li>
                    <li className="sidebarListItem">
                        <LocalActivityIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Top events</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">About us</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}