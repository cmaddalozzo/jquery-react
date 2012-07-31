jQuery React
============

A simple plugin to facilitate reacting to changes to the browsers width.

Usage
-----------
To call use jQuery React invoke it from the global jQuery object, passing it a key/value list of breakpoints.

```javascript
jQuery.react(breakpoints);
```
The key for each breakpoint should be a descriptive label and value should be key/value list of settings that apply to that specific breakpoint.

The following settings should be provided for each breakpoint:
>**range** (Array): 
>The range in which this breakpoint can be fired. Should be an array with the value at the first index being the lower bound of the breakpoint and the value at the second index being the upper bound of the breakpoint. Each value can be a non-negative integer between <code>0</code> and <code>Infinity</code>. 

>**callback** (Function): 
>The function to run when this breakpoint in activated. The current width of the window will be passed in as a parameter to the function. 

>**frequency** (String): 
>Specifies the frequency at which the callback function should be fired. The possible values are <code>once</code> and <code>continous</code>. If set to once, the breakpoint will only fire when if is first reached. If set to continous, the breakpoint will fire everytime the windows is resized and its new size falls within the range of the breakpoint.  


Usage Example
-----------

```javascript
;(function($){
    $().react({
      'small' : {
        'range': [0, 555],
        'callback' : function(width){
          $('#main-menu').hide();
        },
        'frequency' : 'once'
      },
      // By setting range between 0 and Infinity and frequency to continous we can create a
      // breakpoint that fires every time the window is resized.
      'all' : {
        'range':[0, Infinity],
        'callback' : function(width){
          $('.content-list').width(width / 2);
        },
        'frequency' : 'continuous'
      },
      'default_once' : {
        'range':[554, Infinity],
        'callback' : function(width){
          $('#main-menu').show();
        },
        'frequency' : 'once'
      }
    });
})( jQuery );
```
