import React from "react";
import PropTypes from "prop-types";

const Users = ( {users} ) => {
  return <div>
      {
        'Users of type ' + users.type + ' are ' + users.count
      }
  </div>
};

Users.propTypes = {
  user: PropTypes.object
};

export default Users;