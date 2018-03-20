'use strict';

//Q:20180320: Enable refunds listing {
const resource = require('../apiResources');

var refunds = function(config) {
  return resource.resourceActions('refunds', ['list', 'retrieve'],
    {'key': config['secretKey'], 'omiseVersion': config['omiseVersion']}
  );
};

module.exports = refunds;
// }
