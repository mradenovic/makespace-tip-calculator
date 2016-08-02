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
