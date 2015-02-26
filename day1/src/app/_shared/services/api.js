angular.module('aa.shared')

.provider('api', function() {
  'use strict';

  /* ============= ApiEndpointConfig ============== */

  var ApiEndpointConfig = function(name) {
    this.actions = {};
    this.name = name;

    var self = this;
    var defaultActions = {
      'get': 'GET',
      'update': 'PUT',
      'save': 'POST',
      'patch': 'PATCH',
      'remove': 'DELETE'
    };

    // add default actions to endpoint config
    angular.forEach(defaultActions, function(method, action) {
      self.addAction(action, method);
    });
  };

  ApiEndpointConfig.prototype.addAction = function(name, method, params) {
    this.actions[name] = {method: method.toUpperCase(), params: params, isSecure: true};
    return this;
  };

  ApiEndpointConfig.prototype.addUnsecuredAction = function(name, method, params) {
    this.actions[name] = {method: method.toUpperCase(), params: params, isSecure: false};
    return this;
  };

  ApiEndpointConfig.prototype.route = function(route) {
    this.route = route;
    return this;
  };

  ApiEndpointConfig.prototype.setModel = function(model) {
    this.model = model;
    return this;
  };


  /* ================ ApiEndpoint ================= */

  var ApiEndpoint = function(baseUrl, endpointConfig, $injector, $resource) {
    this.config = endpointConfig;
    this.$injector = $injector;
    this.resource = $resource(baseUrl + endpointConfig.route, {id: '@id'}, endpointConfig.actions);

    var self = this;

    // Extend this endpoint objects with methods for all of the actions defined
    // in the configuration object. The action performed depends on whether or
    // not there is a model defined in the configuration; when there is a model
    // defined, certain request types must be wrapped in order to apply the
    // pre/post request transformations defined by the model.
    angular.forEach(endpointConfig.actions, function(action, actionName) {
      var actionMethod = self.request;

      if (endpointConfig.model) {
        if (action.method === 'GET') {
          actionMethod = self.getRequestWithModel;
        } else if (action.method === 'POST' || action.method === 'PUT') {
          actionMethod = self.saveRequestWithModel;
        }
      }

      self[actionName] = angular.bind(self, actionMethod, actionName);
    });
  };

  ApiEndpoint.prototype.instantiateModel = function(data) {
    var model = this.$injector.instantiate(this.config.model);

    angular.extend(model, data);

    if (typeof model.afterLoad === 'function') {
      model.afterLoad.call(model);
    }

    return model;
  };

  ApiEndpoint.prototype.request = function(action, data, params) {
    if (params === undefined) {
      return this.resource[action](data).$promise;
    } else {
      return this.resource[action](data, params).$promise;
    }
  };

  ApiEndpoint.prototype.getRequestWithModel = function(action, params) {
    var self = this;
    var promise = this.request(action, params);

    // Wrap the raw server response data in an instantiated model object
    return promise.then(function(res) {
      if (self.config.model) {
        var data = res[self.config.name];
        var instantiateModel = self.instantiateModel.bind(self);

        if (data != null) {
          res[self.config.name] = angular.isArray(data) ? data.map(instantiateModel) : instantiateModel(data);
        }
      }

      return res;
    });
  };

  ApiEndpoint.prototype.saveRequestWithModel = function(action, data, params) {
    // Copy the given data so that the beforeSave operation doesn't alter the
    // object state from wherever the request was triggered.
    var model = angular.copy(data);

    if (model && typeof model.beforeSave === 'function') {
      model.beforeSave();
    }

    return this.request(action, model, params);
  };


  /* ================ ApiProvider ================= */

  this.baseUrl = '';
  this.endpoints = {};


  this.setBaseUrl = function(baseUrl) {
    this.baseUrl = baseUrl;
  };

  this.endpoint = function(name) {
    var endpointConfig = new ApiEndpointConfig(name);
    this.endpoints[name] = endpointConfig;
    return endpointConfig;
  };

  this.$get = ['$injector', function($injector) {
    var self = this;
    var api = {};

    angular.forEach(this.endpoints, function(endpointConfig, name) {
      api[name] = $injector.instantiate(ApiEndpoint, {
        baseUrl: self.baseUrl,
        endpointConfig: endpointConfig
      });
    });

    return api;
  }];
});
