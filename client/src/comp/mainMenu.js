import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class MainMenu extends Component {

    componentDidMount() {
        this.props.weatherActions.getWeather('London');
    }

    shouldComponentUpdate(props) {
        return JSON.stringify(props.weather) !== JSON.stringify(this.props.weather)
    }

    render() {
        const weather = this.props.weather;

        return (
            <nav className="navbar">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <Link className="button is-primary" to='/contacts'>Contacts</Link>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="container is-fluid weather-info">{weather.location}: {weather.temperature}&#x2103;</div>
                </div>
            </nav>
        )
    }
}

export default MainMenu
