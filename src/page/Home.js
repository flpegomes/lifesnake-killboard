import React, { Component } from 'react'
import Menu from '../components/Menu'
import '../css/home.css'

class Home extends Component {
    render() {
        return (
            <div className="page-container">
                <Menu />
            </div>
        )
    }
}

export default Home