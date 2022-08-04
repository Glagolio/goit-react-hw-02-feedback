import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text }) => <p>{text}</p>;

export default Notification;

Notification.prototype = {
  text: PropTypes.string,
};
