const assert = require('assert');
const app = require('../../src/app');

describe('\'promo\' service', () => {
  it('registered the service', () => {
    const service = app.service('promo');

    assert.ok(service, 'Registered the service');
  });
});
