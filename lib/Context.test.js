import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import Context from './Context';

class ComponentWithContext extends Component {
  static contextTypes = {
    defaultEnvironment: PropTypes.string,
  };

  render() {
    const { defaultEnvironment } = this.context;

    return (
      <span>
        {defaultEnvironment}
      </span>
    );
  }
}

describe('relay-context/Context', () => {
  it('adds the child-context', () => {
    const component = mount(
      <Context environmentRegistry={{ test: { value: 1337 } }} defaultEnvironment="test">
        <ComponentWithContext />
      </Context>,
    );

    expect(component.find(ComponentWithContext).html()).toBe('<span>test</span>');
  });
});
