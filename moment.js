const moment = require('moment');

const date = '20190731';
const time = '1130';
console.log(moment([date, time], 'YYYYMMDD hhmm').format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS));
