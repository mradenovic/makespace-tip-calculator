QUnit.helpers( this );

function testFunctions() {
   testingGetTipFromBody();
}
 
function getServerTestsHtml( e ) {
     QUnit.urlParams( e.parameter );
     QUnit.config({
          title: "mstc Server tests"
     });
     QUnit.load( testFunctions );
 
     return QUnit.getHtml();
};

function getClientTestsHtml( e ) {
  return HtmlService.createTemplateFromFile('ClientTests').evaluate()
      .setTitle('mstc Client tests')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
