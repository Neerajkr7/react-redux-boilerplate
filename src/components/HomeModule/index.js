import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import actions from '../../redux/actions/users'

import './styles.scss'

@connect((state) => state, actions)
export default class HomeModule extends Component {
    render() {
        return (
            <div className="index-content">
                Get Users List
        <button onClick={this.props.getUsersList}>Click</button>
                <ol>
                    {
                        this.props.users.usersData.map((user, index) =>
                            <li key={user.id}>{user.name} - {user.phone}</li>
                        ) 
                    }
                </ol>
            </div>
        )
    }
}

HomeModule.propTypes = {
    getUsersList: propTypes.string,
    users: propTypes.string
}

HomeModule.defaultProps = {
    getUsersList: '',
    users: ''
}
