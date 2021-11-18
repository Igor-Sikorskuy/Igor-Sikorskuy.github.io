
function Kluch()
{
	document.onkeydown=func1;
	var Array=["#ai","#ai1","#ai2","#ai3","#ai4","#ai5", "#ai6", "ai7"]
function func1 (event)
{
	if(event.altKey && event.keyCode>48&&event.keyCode<= 48+Array.length)
  {
    document.location.href=Array[event.keyCode-49];
  }
}
}