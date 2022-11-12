import React from 'react'
import "./home.css"

import TopBar from '../../components/topbar/TopBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Footer from "../../components/footer/Footer";
import {BrowserRouter as Router} from 'react-router-dom'

export default function Home() {
    return (
        <Router>
            <TopBar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
            </div>
            <Footer/>

        </Router>
    )
}