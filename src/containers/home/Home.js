import React, {Component} from "react";
import {connect} from "react-redux";
import Users from '../../components/user/Users';
import {
    incrementUsersAction,
    decrementUsersAction,
    setUsers
} from "../../actions/users";

import "./home.css";

class Home extends Component {

    constructor() {
        super();
        this.incrementUsers = this.incrementUsers.bind(this);
        this.decrementUsers = this.decrementUsers.bind(this);
        this.setUsers = this.setUsers.bind(this);
    }

    incrementUsers() {
        const { dispatch } = this.props;
        dispatch(incrementUsersAction());
    }

    decrementUsers() {
        const { dispatch } = this.props;
        dispatch(decrementUsersAction());
    }

    setUsers() {
        const { dispatch } = this.props;
        dispatch(setUsers(394));
    }


    render() {
        return (
            <div>
                <Users users={this.props.users}/>
                <button onClick={()=>this.incrementUsers()}>INCREMENT</button>
                <button onClick={()=>this.decrementUsers()}>DECREMENT</button>
                <button onClick={()=>this.setUsers()}>Turn to 394!</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {users} = state;
    return {
        users
    };
};

export default connect(mapStateToProps)(Home);