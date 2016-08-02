var msg01 = '            Tip Received from Christina Lamano.\n'
          + '           -----\n'
          + '            \n'
          + '            Amount received: $10.00\n'
          + '            Staff on apopointment: Jamal Prince, Miroslav Radenovic\n';

var msg02 = '            Tip Received from Zsuzsanna Wiliford.\n'
          + '            -----\n'
          + '            \n'
          + '            Total tip: $10.00\n'
          + '            Your share: $5.00\n'
          + '            Staff on appointment: Miroslav Radenovic, Michael Francis\n';


function testingGetTipFromBody(){
  QUnit.test( "getTipFromBody testing", function() {
    expect(2);
    deepEqual( getTipFromBody(msg01), {customer: 'Christina Lamano', total: '$10.00', yourShare: null}, "Test tip object from msg01" );
    deepEqual( getTipFromBody(msg02), {customer: 'Zsuzsanna Wiliford', total: '$10.00', yourShare: '$5.00'}, "Test tip object from msg02" );
  });
}