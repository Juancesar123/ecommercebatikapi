const assert = require('assert');
const app = require('../../src/app');

describe('\'diskon\' service', () => {
  it('registered the service', () => {
    const service = app.service('diskon');

    assert.ok(service, 'Registered the service');
  });
});
