// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';

type QueryRendererProps = {
  children: any,
  renderer: Function,
};

export default class QueryRenderer extends Component<*, QueryRendererProps, *> {
  static contextTypes = {
    environment: PropTypes.object,
  };

  render() {
    const { environment } = this.context;
    const { renderer, ...rest } = this.props;

    return <OriginalQueryRenderer {...rest} environment={environment} renderer={renderer} />;
  }
}
