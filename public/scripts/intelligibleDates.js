// takes Date.now() value, from milliseconds to human relatable value.
const intelligibleDates = function(dateData){
  // ms - seconds
  let dateSec = dateData / 1000;
  switch(true) {
    case dateSec > 31536000:
      return Math.floor((dateSec / 31536000)) + " years ago";
      break;
    case dateSec > 2592000:
      return Math.floor((dateSec / 2592000)) + " months ago";
      break;
    case dateSec > 86400:
      return Math.floor((dateSec / 86400)) + " days ago";
      break;
    case dateSec > 3600:
      return Math.floor((dateSec / 3600)) + " hours ago";
      break;
    case dateSec > 60:
      return Math.floor((dateSec / 60)) + " min ago";
      break;
    case dateSec > 59:
      return Math.floor(dateSec) + " seconds ago";
      break;
    case dateSec > 1:
      return Math.floor((dateSec * 1000)) + " milliseconds ago!!";
      break;
  }
  return Math.floor(dateData) + " milliseconds ago!"
};
