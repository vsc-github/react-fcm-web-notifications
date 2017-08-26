import React from "react";
import PropTypes from "prop-types";

import './actions.css';

const Actions = ( { fcmToken, notifyMeFunc, notifyMeWithDelayFunc } ) => {

    return <div className="actions">
        <button onClick={notifyMeFunc} className={fcmToken===null?'disabled':''} >Notify me!</button>
        <button onClick={notifyMeWithDelayFunc} className={fcmToken===null?'disabled':''} >Notify me with delay!</button>
    </div>
};

Actions.propTypes = {
    requestPermissionFunc: PropTypes.func
};

export default Actions;