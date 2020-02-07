const moment = require("moment");

const date = "19910123";
const time = "1140";
console.log(
  moment([date, time], "YYYYMMDDhhmm").format(
    moment.HTML5_FMT.DATETIME_LOCAL_SECONDS
  )
);
