const assert = require('assert');
const app = require('../../src/app');

describe('\'trackingpengiriman\' service', () => {
  it('registered the service', () => {
    const service = app.service('trackingpengiriman');

    assert.ok(service, 'Registered the service');
  });
});
