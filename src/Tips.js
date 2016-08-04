/**
 * Returns information about tips.
 * @param {String} dateStart Period start date.
 * @param {String} dateEnd Period end date.
 * @return {Array.<Object>} The array of tip object.
 */
function getTips(after, before) {
  var searchStr = 'from:app@makespace.com after: ' + after + ' before: ' + before + ' tip received';
  var threads = GmailApp.search(searchStr);
  Logger.log('Number of threads: ' + threads.length)

  var tips = [];

  var threadsLength = threads.length;
  setThreadsLength(threadsLength);
  threads.forEach(function(thread, index) {
    var progress = index/threadsLength*100;
    setProgress(progress);
    var messages = thread.getMessages();
    messages.forEach(function(message) {
      var tip = getTip(message);
      tips.push(tip);
    })
  })
  
  setProgress(0)

  return tips;
}

/**
 * Returns tip object from message plain body.
 * @param {<Object>} message Gmail message.
 * @return {<Object>} Single tip data.
 *
 * Example tip object:
 * { date: "Wed Jul 27 2016",
 *   customer: "Mike",
 *   total: "$150.00",
 *   yourShare: "$50.00"
 * }
 */
function getTip(message) {
  var body = message.getPlainBody();

  var tip = getTipFromBody(body);

  var date = message.getDate();
  tip.date = date.toDateString();

  return tip;
}

/**
 * Returns tip object from message plain body.
 * @param {String} body Gmail message body.
 * @return {<Object>} Single tip data.
 *
 * Example tip object:
 * { customer: "Mike",
 *   total: "$150.00",
 *   yourShare: "$50.00"
 * }
 */
function getTipFromBody(body) {
  body = body.replace(/\s+/g," ");
  var tip = {};

  var customer = /Tip Received from.*\. -/i;
  try {
    tip.customer = body.match(customer)
    .toString()
    .replace('Tip Received from ', '')
    .replace('. -', '');
  }
  catch(err) {
    tip.customer = 'N/A';
  }

  var reAmount = /\$\d*\.\d\d/g;
  var amounts = body.match(reAmount);

  tip.total = amounts[0];
  tip.yourShare = amounts[1];
  if (!tip.yourShare) {
    tip.yourShare = '$0.00';
  }

  return tip;
}

