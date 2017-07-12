import React, { Component } from 'react'


class Modal extends Component {

    render() {
        return (
            <div className="modal">
                <div className="modal-bg"> </div>
                <div className="modal-content notification is-info">
                    <div className="columns">
                        <div className="column is-1 is-offset-11">
                            <a className="delete is-medium" onClick={this.props.actions.closeModal}> </a>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-6 is-offset-3">
                            MODAL TEXT WILL BE HERE
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
