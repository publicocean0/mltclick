(function($) {
$.fn.mltclick = function(delegateSelector, callback, dblclickWait) {
    var obj;
    if (typeof(delegateSelector)==='function' && typeof(callback)!=='function') {
        callback= delegateSelector; delegateSelector = null; // If 'delegateSelector' is missing reorder arguments
    } 
    if (( delegateSelector!=null && typeof(delegateSelector)!=='string') || typeof(callback)!=='function' ) {
        return false;
    }
    return $(this).each(function() {
		var clicks = 0;
        $(this).on('click', delegateSelector, function(event) {
            var self = this;
            
            clicks++;
            if (clicks == 1) {
                setTimeout(function(){
					event.clickCount=clicks;                	
                    callback.call(self, event); // Single click action
                    clicks=0;
                }, dblclickWait || 300);
            }
        });
    });
};
})(jQuery);
