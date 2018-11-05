'use strict';

const assert = require('assert');
const nock = require('nock');

describe('isonline', () => {
    it('detects if the database is online', () => {
        assert.equal('foo', 'to implement');
    });

    it('detects offline databases', () => {
        assert.equal('foo', 'to implement');
    });

    it('detects if something is online, but not a CouchDB/PouchDB', () => {
        assert.equal('foo', 'to implement');
    });

    it('just accepts valid urls', () => {
        assert.equal('foo', 'to implement');
    });
});
