/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoboWaas2);
  }
}(this, function(expect, CoboWaas2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2.BabylonValidator();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BabylonValidator', function() {
    it('should create an instance of BabylonValidator', function() {
      // uncomment below and update the code to test BabylonValidator
      //var instance = new CoboWaas2.BabylonValidator();
      //expect(instance).to.be.a(CoboWaas2.BabylonValidator);
    });

    it('should have the property pool_type (base name: "pool_type")', function() {
      // uncomment below and update the code to test the property pool_type
      //var instance = new CoboWaas2.BabylonValidator();
      //expect(instance).to.be();
    });

    it('should have the property icon_url (base name: "icon_url")', function() {
      // uncomment below and update the code to test the property icon_url
      //var instance = new CoboWaas2.BabylonValidator();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CoboWaas2.BabylonValidator();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new CoboWaas2.BabylonValidator();
      //expect(instance).to.be();
    });

    it('should have the property public_key (base name: "public_key")', function() {
      // uncomment below and update the code to test the property public_key
      //var instance = new CoboWaas2.BabylonValidator();
      //expect(instance).to.be();
    });

    it('should have the property commission_rate (base name: "commission_rate")', function() {
      // uncomment below and update the code to test the property commission_rate
      //var instance = new CoboWaas2.BabylonValidator();
      //expect(instance).to.be();
    });

    it('should have the property supported_pos_chains (base name: "supported_pos_chains")', function() {
      // uncomment below and update the code to test the property supported_pos_chains
      //var instance = new CoboWaas2.BabylonValidator();
      //expect(instance).to.be();
    });

  });

}));
