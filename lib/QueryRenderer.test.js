import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

jest.mock('react-relay', () => ({
	QueryRenderer: ({ renderer }) => renderer()
}));

import Context from './Context';
import QueryRenderer from './QueryRenderer';

describe('relay-context/QueryRenderer', () => {
	it('works', () => {
		const environment = { value: 1337 };
		const component = mount(<Context environment={environment}><QueryRenderer renderer={() => <span>1337</span>} /></Context>);

		expect(component.html()).toBe('<div><span>1337</span></div>');
	});
});
