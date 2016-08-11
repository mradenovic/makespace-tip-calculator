/**
 * Special function that handles HTTP GET requests to the published web app.
 * @return {HtmlOutput} The HTML page to be served.
 */
function doGet(e) {
  if (e.parameter.test == 'server-tests') {
    return getServerTestsHtml(e);
  } else if (e.parameter.test == 'client-tests') {
    return getClientTestsHtml(e);
  } else {
    return getHomePageHtml(e);
  }
}

/**
 * Creates Tip Calculator home page.
 * @return {HtmlOutput} The HTML page to be served.
 */
function getHomePageHtml(e) {
  return HtmlService.createTemplateFromFile('Page').evaluate()
      .setTitle('Tip calculator')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Returns html string to include in html document.
 * @param {String} filename Name of the file that contains html string.
 * @return {String} String to include in html document.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}