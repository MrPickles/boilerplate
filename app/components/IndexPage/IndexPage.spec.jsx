import assert from 'assert';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

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
    mount(<IndexPage />);
    expect(IndexPage.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
