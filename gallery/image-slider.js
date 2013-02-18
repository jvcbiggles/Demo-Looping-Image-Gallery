/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_146285946718862710131403318477
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('146285946718862710131403318477',event);/*luc!d_debug_end*/
	/*luc!d_function*/showFirstImage(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_100_23_13028008784310917341896432007
/*lucidcode*/
$(/*luc!d_element*/'.stop'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('13028008784310917341896432007',event);/*luc!d_debug_end*/
	/*luc!d_function*/stopSlider(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidCustomAction_218_169_7245693861605392012839004776
function stopSlider(senderObject, event) {
	lucidDebug('7245693861605392012839004776',event);
/*lucidcode*/clearInterval(myInterval);/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_23_400_46926575913896597292126404178
function swapImagesFade(senderObject, event) {
	lucidDebug('46926575913896597292126404178',event);
/*lucidcode*/var $active = $('#gallery .active');
var $next = ($('#gallery .active').next().length > 0) ? $('#gallery .active').next() : $('#gallery img:first');
$active.fadeOut(function(){
$active.removeClass('active');
$next.fadeIn().addClass('active');
});/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidTimeoutAction_20_295_30062476617189044181676533882
function myContinuousTimer(senderObject, event) {
	lucidDebug('30062476617189044181676533882',event);
/*lucidcode*/
    var delayFunction = function() { /*luc!d_callback*/swapImagesFade(senderObject,event);/*luc!d_callback_end*/ };
    myInterval = setInterval(delayFunction,/*luc!d_delay*/3000/*luc!d_delay_end*/);
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCommentAction_118_260_216_102_181165906715307919031165422661
/*This timer was modified to loop 
'continuously' by changing its code 
from:
"setTimout..." 
to:
"myInterval = setInterval..." */
//EndLucid

//Lucid_LucidChangeAttributeAction_21_187_20196033663472478801482050261
function showFirstImage(senderObject, event) {
	lucidDebug('20196033663472478801482050261',event);
/*lucidcode*/
var ele = /*luc!d_element*/'#gallery img:first'/*luc!d_element_end*/;
	$(ele)./*luc!d_function_0*/attr/*luc!d_function_0_end*/(/*luc!d_property_0*/'class'/*luc!d_property_0_end*/, /*luc!d_value_0*/'active'/*luc!d_value_0_end*/ );
/*lucidcode_end*/

/*luc!d_callback*/myContinuousTimer(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_142_398_1140192867667266781473395146
function swapImages(senderObject, event) {
	lucidDebug('1140192867667266781473395146',event);
/*lucidcode*/var $active = $('#gallery .active');
var $next = ($('#gallery .active').next().length > 0) ? $('#gallery .active').next() : $('#gallery img:first');
$active.removeClass('active');
$next.addClass('active');/*lucidcode_end*/

}
//EndLucid

