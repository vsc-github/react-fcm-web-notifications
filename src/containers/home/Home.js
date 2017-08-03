import React, {Component} from "react";
import {connect} from "react-redux";
import Users from '../../components/user/Users';
import {
    incrementUsersAction,
    decrementUsersAction,
    setUsers,
    notifyMeAction,
    notifyMeWithDelayAction
} from "../../actions/users";

import "./home.css";

class Home extends Component {

    constructor() {
        super();
        this.incrementUsers = this.incrementUsers.bind(this);
        this.decrementUsers = this.decrementUsers.bind(this);
        this.setUsers = this.setUsers.bind(this);
        this.notifyMe = this.notifyMe.bind(this);
        this.notifyMeWithDelay = this.notifyMeWithDelay.bind(this);
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

    notifyMe(){
        const { dispatch } = this.props;
        dispatch(notifyMeAction("cVE7cjmnmSU:APA91bHAnuvYp_0wbHIA5BaA6z6E_DaLLUDstnKfTU7RlKykAFLJWQdyDF2iV2gtZygmPnuYox0dwgLgjQlnqNBfz9IW2JTXip5Ms6ui44Vq9sao_0YPnxaxdPgtZ5dXrjRxhxRo50vB"));
    }

    notifyMeWithDelay(){
        const { dispatch } = this.props;
        dispatch(notifyMeWithDelayAction("cVE7cjmnmSU:APA91bHAnuvYp_0wbHIA5BaA6z6E_DaLLUDstnKfTU7RlKykAFLJWQdyDF2iV2gtZygmPnuYox0dwgLgjQlnqNBfz9IW2JTXip5Ms6ui44Vq9sao_0YPnxaxdPgtZ5dXrjRxhxRo50vB"));
    }

    render() {
        return (
            <div>
                <Users users={this.props.users}/>
                <button onClick={()=>this.incrementUsers()}>INCREMENT</button>
                <button onClick={()=>this.decrementUsers()}>DECREMENT</button>
                <button onClick={()=>this.setUsers()}>Turn to 394!</button>
                <button onClick={()=>this.notifyMe()}>Notify me!</button>
                <button onClick={()=>this.notifyMeWithDelay()}>Notify me with delay!</button>
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