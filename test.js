const main = require('./main.js');

main.token(process.env.TOKEN);

main.activity('ACTIVITY test', 'LISTENING');

main.warn('1',"WARN test")
main.dmwarn('DM TEST')
main.start();
main.uptime();