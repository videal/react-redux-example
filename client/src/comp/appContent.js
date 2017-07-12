import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Comp from './base/comp'
import PriceTable from './priceTable'
import MainMenu from './mainMenu'
import Modal from './modalWindow'
import logo from '../assets/logo.svg'


import * as tableActions from '../actions/tableActions'
import * as modalActions from '../actions/modalActions'
import * as weatherActions from '../actions/weatherActions'


class AppContent extends Comp {

    componentWillMount() {
        weatherActions.getWeather('London');
    }

    render() {
        const tableData = this.props.tableReducer;
        const tableActions = this.props.tableActions;
        const modalData = this.props.modalReducer;
        const modalActions = this.props.modalActions;
        const weatherData = this.props.weatherReducer;
        const weatherActions = this.props.weatherActions;

        return (
            <section>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <MainMenu weather={weatherData} weatherActions={weatherActions} />

                <div className="s30"/>
                <div className="container is-fluid">
                    {this._content(tableData, tableActions, modalActions)}
                </div>

                {this._modal(modalData, modalActions)}

            </section>
        )
    }

    _modal(data, actions) {
        if (data.open) {
            return (
                <Modal actions={actions}/>
            )
        }
    }

    _content(data, actions, modalActions) {
        return (
            <section className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <p className="App-intro">
                        EventSource data:
                    </p>
                    <div className="s10"/>
                    <section>
                        <PriceTable data={data} actions={actions}/>
                    </section>
                    <div className="s20"/>
                    <button className="button is-info" onClick={modalActions.openModal}>Test</button>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        modalReducer: state.modalReducer,
        tableReducer: state.tableReducer,
        weatherReducer: state.weatherReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(tableActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch),
        weatherActions: bindActionCreators(weatherActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContent)