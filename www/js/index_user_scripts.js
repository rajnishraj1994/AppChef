/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  30 min */
    $(document).on("click", ".uib_w_10", function(evt)
    {
        /* your code goes here */ 
        document.location.href="http://www.dominos.co.in/";
         return false;
    });
    
        /* listitem  45 min */
    $(document).on("click", ".uib_w_11", function(evt)
    {
        /* your code goes here */ 
        document.location.href="http://www.madhuloka.com/";
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
