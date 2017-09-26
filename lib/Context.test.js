import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import Context from './Context';

class ComponentWithContext extends Component {
  static contextTypes = {
    environment: PropTypes.object,
  };

  render() {
    const { environment } = this.context;

    return <span>{environment.value}</span>;
  }
}

describe('relay-context/Context', () => {
  it('adds the child-context', () => {
    const environment = { value: 1337 };
    const component = mount(
      <Context environment={environment}>
        <ComponentWithContext />
      </Context>,
    );

    expect(component.find(ComponentWithContext).html()).toBe('<span>1337</span>');
  });
});
