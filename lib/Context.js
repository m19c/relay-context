// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

type ContextProps = {
  children: any,
  environmentRegistry: { [key: string]: Object },
  defaultEnvironment: string,
};

class Context extends Component<*, ContextProps, *> {
  static childContextTypes = {
    environmentRegistry: PropTypes.object,
    defaultEnvironment: PropTypes.string,
  };

  getChildContext() {
    const { environmentRegistry, defaultEnvironment } = this.props;

    return {
      environmentRegistry,
      defaultEnvironment,
    };
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export default Context;
