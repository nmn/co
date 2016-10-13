
var assert = require('assert');
var eff = require('redux-saga/effects')

var co = require('..');

const add = (a, b) => a + b
const addPromise = (a, b) => Promise.resolve(a + b)
const addCps = (a, b, cb) => cb(null, a + b)

describe('co(* -> yield {})', function(){
  it('should resolve call effects', function(){
    return co(function *(){
      var value = yield eff.call(add, 1, 2);

      assert.equal(3, value);
    });
  })

  it('should resolve call effects', function(){
    return co(function *(){
      var value = yield eff.call(addPromise, 1, 2);

      assert.equal(3, value);
    });
  })

  it('should resolve cps effects', function(){
    return co(function *(){
      var value = yield eff.cps(addCps, 1, 2);

      assert.equal(3, value);
    });
  })
})
