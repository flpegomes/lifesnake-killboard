import React, { Component } from 'react'
import '../css/menu.css'
import { Link } from 'react-router-dom'


class Menu extends Component {
    render() {
        return (
            <div className="menu-container">
                <Link to="/" className="menu-button">
                    home
                </Link>
                <Link to="/killboard" className="menu-button">
                    killboard
                </Link>
            </div>
        )
    }
}

export default Menu