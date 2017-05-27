import assert from 'assert';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';

import IndexPage from './IndexPage';

describe('Basic Arithmetic', () => {
  it('1 + 1 = 2', (done) => {
    assert.equal(1 + 1, 2);
    done();
  });
});

describe('<IndexPage />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(IndexPage.prototype, 'componentDidMount');
    // The component needs to be wrapped by a router due to React Router 4.
    mount(
      <MemoryRouter>
        <IndexPage />
      </MemoryRouter>
    );
    expect(IndexPage.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
