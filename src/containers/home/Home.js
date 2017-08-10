import React, {Component} from "react";
import {connect} from "react-redux";
import Users from '../../components/user/Users';
import Permission from '../../components/permission/Permission';
import {
    notifyMeAction,
    notifyMeWithDelayAction,
    updateFcmTokenAction
} from "../../actions/users";
/*global firebase*/
import "./home.css";

class Home extends Component {

    constructor() {
        super();

        this.state = {
            messaging : firebase.messaging()
        };

        this.notifyMe = this.notifyMe.bind(this);
        this.notifyMeWithDelay = this.notifyMeWithDelay.bind(this);
        this.requestPermission = this.requestPermission.bind(this);
        this.getToken = this.getToken.bind(this);
    }

    notifyMe(){
        const { dispatch } = this.props;
        dispatch(notifyMeAction("cVE7cjmnmSU:APA91bHAnuvYp_0wbHIA5BaA6z6E_DaLLUDstnKfTU7RlKykAFLJWQdyDF2iV2gtZygmPnuYox0dwgLgjQlnqNBfz9IW2JTXip5Ms6ui44Vq9sao_0YPnxaxdPgtZ5dXrjRxhxRo50vB"));
    }

    notifyMeWithDelay(){
        const { dispatch } = this.props;
        dispatch(notifyMeWithDelayAction("cVE7cjmnmSU:APA91bHAnuvYp_0wbHIA5BaA6z6E_DaLLUDstnKfTU7RlKykAFLJWQdyDF2iV2gtZygmPnuYox0dwgLgjQlnqNBfz9IW2JTXip5Ms6ui44Vq9sao_0YPnxaxdPgtZ5dXrjRxhxRo50vB"));
    }

    requestPermission(){
        this.state.messaging.requestPermission()
            .then(()=>{
                console.log('Notification permission granted.');
                // TODO(developer): Retrieve an Instance ID token for use with FCM.
                // ...
                this.getToken();
            })
            .catch(function(err) {
                console.log('Unable to get permission to notify.', err);
            });
    }

    getToken(){
        // [START get_token]
        // Get Instance ID token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        const { dispatch } = this.props;
        this.state.messaging.getToken()
            .then((currentToken)=>{
                if (currentToken) {
                    console.log("Token received: ", currentToken);
                    dispatch(updateFcmTokenAction(currentToken));
                    //send token to the server
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                    // this.requestPermission();
                }
            })
            .catch(function(err) {
                console.log('An error occurred while retrieving token. ', err);
                console.log('Error retrieving Instance ID token. ', err);
                // send false to server
            });
    }

    render() {
        return (
            <div>
                <Users users={this.props.users}/>
                <Permission requestPermissionFunc={this.requestPermission}/>
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