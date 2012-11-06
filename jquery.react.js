/*
 * jQuery React 0.1
 *
 * A simple plugin to facilitate reacting to changes to the browsers width.
 */
;(function($){
    //Add our function to the global jQuery object.
    //TODO: Add options as necessary
    $.fn.react = function( breakpoints) {
      //Create our function then immediately invoke it.
      return (function(that) {
        // Fire on window resize.
        $(window).resize(function() {
          var width = window.innerWidth;
          //Iterate through all of our breakpoints.
          for(var breakpoint in breakpoints){
            if(width >= breakpoints[breakpoint].range[0] && width <= breakpoints[breakpoint].range[1]){
              // Fire the callback function if we have reached a new breakpoint
              // or our current breakpoint is continuous.
              if((!breakpoints[breakpoint].active || false) || breakpoints[breakpoint].frequency == 'continuous'){
                breakpoints[breakpoint].callback.apply(null, [width]);
                breakpoints[breakpoint].active = true;
              }
            }else{
              breakpoints[breakpoint].active = false;
            }
          }
        });
        // Fire the resize handler to set initial conditions
        $(window).trigger('resize');
        return that;
      })(this);
    };
})( jQuery );
