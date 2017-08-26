import React from "react";
import PropTypes from "prop-types";

const Actions = ( { notifyMeFunc, notifyMeWithDelayFunc } ) => {

    return <div className="actions">
        <button onClick={notifyMeFunc}>Notify me!</button>
        <button onClick={notifyMeWithDelayFunc}>Notify me with delay!</button>
    </div>
};

Actions.propTypes = {
    requestPermissionFunc: PropTypes.func
};

export default Actions;