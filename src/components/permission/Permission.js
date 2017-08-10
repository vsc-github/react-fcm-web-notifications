import React from "react";
import PropTypes from "prop-types";

const Permission = ( {requestPermissionFunc} ) => {
  return <div>
      <div onClick={requestPermissionFunc}>Ask for permission!</div>
  </div>
};

Permission.propTypes = {
    requestPermissionFunc: PropTypes.func
};

export default Permission;