// https://bitbucket.org/brettzink/sendgrid-activity-bookmarklet
if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=runthis;
	jQ.src = '/web/20130519203943/http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	runthis();
}

function writeConsole(content) {
 top.consoleRef=window.open('','myconsole',
  'width=800,height=600'
   +',menubar=0'
   +',toolbar=1'
   +',status=0'
   +',scrollbars=1'
   +',resizable=1')
 top.consoleRef.document.writeln(
  '<html><head><title>Console</title></head>'
   +'<body bgcolor=white onLoad="self.focus()">'
   +content
   +'</body></html>'
 )
 top.consoleRef.document.close()
}
function runthis() {

var result = "";
$("[role=emailActivityRow]").each(function(){
    var valid = true;

    var email = $(this).find(".email[role=emailAddress]").html();
if(email == null) valid = false;
    var date = $(this).find(".time").html();
    var type = $(this).find(".name").html();
if(valid){
    result += email + "," + type + "," + date;
    result += "<br/>";
}
});
writeConsole(result);

}
