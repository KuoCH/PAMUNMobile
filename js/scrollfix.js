/**
 * ScrollFix v0.1
 * http://www.joelambert.co.uk
 *
 * Copyright 2011, Joe Lambert.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

var ScrollFix = function(elem) {
	// Variables to track inputs
	var startTopScroll = undefined,
	
	elem = elem || elem.querySelector(elem);
	
	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startTopScroll = elem.scrollTop;
        //Since scrolling with scrollTop=0 will trigger bounce of webview, set it as 0 to prevent it!!!
		if(startTopScroll <= 0)
			elem.scrollTop = 1;
        //For scroll to the bottom
		if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
			elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
	}, false);
};
