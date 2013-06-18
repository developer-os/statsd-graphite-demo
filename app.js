var sdc_init = require('statsd-client')
var sdc = new sdc_init({ host: 'localhost' });
sdc.increment('my.test.1', 5);  
sdc.close();
