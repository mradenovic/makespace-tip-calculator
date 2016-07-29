QUnit.helpers( this );

function testFunctions() {
   testingCalculateAmountAndQty();
}
 
function getServerTestsHtml( e ) {
     QUnit.urlParams( e.parameter );
     QUnit.config({
          title: "mstc Server tests"
     });
     QUnit.load( testFunctions );
 
     return QUnit.getHtml();
};
 
function testingCalculateAmountAndQty(){
   QUnit.test( "calculateAmountAndQty testing", function() {
      expect(7);
      equal( calculateAmountAndQty(10,2000), 20000, "Test for quantity : 10 and amount : 2000 sp output is 20000" );
      equal( calculateAmountAndQty("e",2000), 0, "Test for quantity : printer and amount : 2000 so output is 0" );
      equal( calculateAmountAndQty(10,"mouse"), 0, "Test for quantity : 10 and amount : mouse so output is 0" );
      equal( calculateAmountAndQty(10,null), 0, "Test for quantity : 10 and amount : null so output is 0" );
      equal( calculateAmountAndQty(null,2000), 0, "Test for quantity : null and amount : 2000 so output is 0" );
      equal( calculateAmountAndQty(undefined,2000), 0, "Test for quantity : undefined and amount : 2000 so output is 0" );
      equal( calculateAmountAndQty(10,undefined), 0, "Test for quantity : 10 and amount : undefined so output is 0" );
   });
}

function calculateAmountAndQty(quantity,amount){
 if(typeof (quantity) == 'undefined' || quantity == 'null' || isNaN(quantity)) {
       quantity=0;
 }
 
 if(typeof (amount) == 'undefined' || amount == 'null' || isNaN(amount)) {
       amount=0;
 }
 
 return (quantity*amount);
}