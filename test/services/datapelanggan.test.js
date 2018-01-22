const assert = require('assert');
const app = require('../../src/app');

describe('\'datapelanggan\' service', () => {
  it('registered the service', () => {
    const service = app.service('datapelanggan');

    assert.ok(service, 'Registered the service');
  });
});
