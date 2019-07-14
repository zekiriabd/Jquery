// *************************************************************** IO
// http://codingforums.com/showthread.php?t=143412
// LA MOD String Version. 
// A tiny ajax library by DanDavis
// Revised 20101006
// http://www.quirksmode.org/js/xmlhttp.html

var XMLHttpFactories = [
	function ( ) { return ( new XMLHttpRequest ( ) );},
	function ( ) { return ( new ActiveXObject ( "Msxml2.XMLHTTP" ) );},
	function ( ) { return ( new ActiveXObject ( "Msxml3.XMLHTTP" ) );},
	function ( ) { return ( new ActiveXObject ( "Microsoft.XMLHTTP" ) );}
  ];

function createXMLHTTPObject ( ) 
  {
  var xmlhttp = false;
  for ( var i = 0; ( i < XMLHttpFactories.length ); i++ ) 
    {
    try{xmlhttp = XMLHttpFactories [ i ] ( );}
    catch ( e ) {continue;}
    break;
    }
  return ( xmlhttp );
  }

function ToInnerHTML  ( url ) 
  {
  var request = createXMLHTTPObject ( );
  request.open ( 'GET', url, false );
  request.setRequestHeader ( 'Content-Type', 'text/html' );
  request.send ( '' );
  return ( request.responseText );
  }

function Add_Html_Page(element,contents) {
if (element.outerHTML) {element.outerHTML = contents;} else {element.innerHTML = contents;}
}
