/* jshint expr:true */
import { it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import setupAuthorizers from 'ember-simple-auth/initializers/setup-authorizers';

let registry;

describe('setupAuthorizers', () => {
  beforeEach(() => {
    registry = {
      injection() {}
    };
  });

  it('injects the session into all authorizers', () => {
    sinon.spy(registry, 'injection');
    setupAuthorizers(registry);

    expect(registry.injection).to.have.been.calledWith('authorizer', 'session', 'simple-auth-session:main');
  });
});
