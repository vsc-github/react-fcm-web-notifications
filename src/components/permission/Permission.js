import React from "react";
import PropTypes from "prop-types";

const Permission = ( { fcmToken, requestPermissionFunc, getTokenFunc } ) => {

    if(Notification.permission !== 'granted'){
        return <button onClick={ requestPermissionFunc }>Ask for permission!</button>

    }
    else if(Notification.permission === 'granted' && fcmToken === null){
        return <button onClick={ getTokenFunc }>Generate Token!</button>
    }
    else{
        return <div>
            You have the permission & the token, send notifications!!
        </div>
    }
};

Permission.propTypes = {
    requestPermissionFunc: PropTypes.func
};

export default Permission;