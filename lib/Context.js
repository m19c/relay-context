// @flow

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

type ContextProps = {
  children: any,
  environment: any,
};

class Context extends Component<*, ContextProps, *> {
  static childContextTypes = {
    environment: PropTypes.object,
  };

  getChildContext() {
    return {
      environment: this.props.environment,
    };
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export default Context;
