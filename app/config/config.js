'use strict';

angular.module('avantripConfiguration', []).
constant("avantripConfiguration", (function() {
  var url = "http://localhost";
  var port = 3001;
  var publicApi = "/";

  return {
    getPublicApiPath: function() {
      return url + (port ? ':' + port : '') + publicApi;
    }
  };
})());