/*global firebase*/
import React, {Component} from "react";
import {connect} from "react-redux";
import Permission from '../../components/permission/Permission';
import Actions from '../../components/actions/Actions';
import {
    notifyMeAction,
    notifyMeWithDelayAction,
    updateFcmTokenAction
} from "../../actions/users";
import "./home.css";

class Home extends Component {

    constructor() {
        super();

        this.state = {
            messaging : firebase.messaging(),
            permissionStateToggle: false
        };

        this.notifyMe = this.notifyMe.bind(this);
        this.notifyMeWithDelay = this.notifyMeWithDelay.bind(this);
        this.requestPermission = this.requestPermission.bind(this);
        this.getToken = this.getToken.bind(this);
    }

    notifyMe(){
        const { dispatch, fcm } = this.props;
        if(fcm.fcmToken !== null){
            dispatch(notifyMeAction(fcm.fcmToken));
        }else{
            alert("FCM token not found. Generate Token by clicking the button above.");
        }
    }

    notifyMeWithDelay(){
        const { dispatch, fcm } = this.props;
        if(fcm.fcmToken !== null){
            dispatch(notifyMeWithDelayAction(fcm.fcmToken));
        }else{
            console.log("FCM token not found. Generate Token by clicking the button above.");
        }
    }

    requestPermission(){
        this.state.messaging.requestPermission()
            .then(()=>{
                console.log('Notification permission granted.');
                // TODO(developer): Retrieve an Instance ID token for use with FCM.
                // ...
                // this.getToken();  WE ARE MAKING THIS MANUAL FOR THE EXAMPLE
                this.setState({permissionStateToggle : true});
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
            <div className="container">
                <div className="info">
                    <span>There are four states possible:</span>
                        <ul>
                            <li>Permission Denied.</li>
                            <li>Permission Granted.</li>
                            <li>Permission Granted but no Token Generated.</li>
                            <li>Permission Granted & Token Generated.</li>
                        </ul>
                </div>
                <Permission
                    fcmToken={ this.props.fcm.fcmToken }
                    requestPermissionFunc={this.requestPermission}
                    getTokenFunc={this.getToken}
                    permissionStateToggle={this.state.permissionStateToggle}
                />
                <Actions
                    fcmToken={ this.props.fcm.fcmToken }
                    notifyMeWithDelayFunc={this.notifyMeWithDelay}
                    notifyMeFunc={this.notifyMe}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { fcm } = state;
    return {
        fcm
    };
};

export default connect(mapStateToProps)(Home);