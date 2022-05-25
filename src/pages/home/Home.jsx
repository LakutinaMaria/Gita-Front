import React from 'react'
import "./home.css"

import TopBar from '../../components/topbar/TopBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

export default function Home(){
    return (
    <>
        <body>
            <TopBar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
            </div>
        </body>
    </>
    ) 
}