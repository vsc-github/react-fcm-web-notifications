import React from "react";
import PropTypes from "prop-types";

import "./permission.css";

const Permission = ( { fcmToken, requestPermissionFunc, getTokenFunc } ) => {

    if(Notification.permission !== 'granted'){
        return <div className="permission">
            <button onClick={ requestPermissionFunc }>Ask for permission!</button>
        </div>
    }
    else if(Notification.permission === 'granted' && fcmToken === null){
        return <div className="permission">
            <button onClick={ getTokenFunc }>Generate Token!</button>
            </div>
    }
    else{
        return <div className="permission">
            Permission Granted & Token Generated.
            You can send notificatons now!
        </div>
    }
};

Permission.propTypes = {
    requestPermissionFunc: PropTypes.func
};

export default Permission;