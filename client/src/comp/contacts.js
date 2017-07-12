import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Contacts extends Component {
    render() {
        return (
            <div className="columns contacts-notification">
                <div className="column is-half is-offset-one-quarter">
                    <div className="notification is-primary">
                        <Link className="delete" to='/dashboard'> </Link>
                        Our contacts will be posted here in the near future.
                        <p> Please  press the close button to return to the dashboard </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contacts;