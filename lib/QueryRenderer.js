// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';

type QueryRendererProps = {
  children: any,
  environment: string,
  renderer: Function,
};

export default class QueryRenderer extends Component<*, QueryRendererProps, *> {
  static contextTypes = {
    defaultEnvironment: PropTypes.string,
    environmentRegistry: PropTypes.object,
  };

  render() {
    const { environmentRegistry, defaultEnvironment } = this.context;
    const { renderer, environment = null, ...rest } = this.props;
    const selectedEnvironment = environmentRegistry[environment || defaultEnvironment];

    return (
      <OriginalQueryRenderer {...rest} environment={selectedEnvironment} renderer={renderer} />
    );
  }
}
