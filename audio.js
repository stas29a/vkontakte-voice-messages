var myLastMessage = '';
function myShow()
{
	var elem = document.getElementsByClassName('notifier_baloon_msg wrapped');
	
	if( elem && elem[0] )
	{
		var message = elem[0].innerHTML;
		var end_span = '</span>';
		var pos = message.indexOf(end_span) + end_span.length + 1;
		message = message.substr(pos);

		if( message != myLastMessage )
		{
			if( obj = document.getElementById('myiframe') )
				document.body.removeChild( obj );

			document.body.innerHTML += '<iframe id="myiframe" src="http://translate.google.com/translate_tts?ie=utf-8&tl=ru&q='+ encodeURIComponent(message) +'"></iframe';

			console.log('message ' + message );

			myLastMessage = message;
		}
	}
}

setInterval("myShow()", 500);