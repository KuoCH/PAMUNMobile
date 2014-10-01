//Need init
//ex: showingPageId = '#page-main';
var showingPageId;
var DEFAULT_PAGEID;
//var historyStack;

$(function () {

  DEFAULT_PAGEID = '#' + $('.page').first().attr('id');
  $(window).on('hashchange', checkUrlHash);
  checkUrlHash();
  new OnPress('.goback');
  $('.goback').on('tap', function(e) {
    e.preventDefault();
    window.history.back();
    return false;
  });

});

checkUrlHash = function() {
  if ($(window.location.hash).length == 0) {
    window.location.hash = DEFAULT_PAGEID;
  } else if ( showingPageId != window.location.hash ) {
    showPageById( window.location.hash );
  } else {
    if ($('#wrapper').hasClass('sb-active')) {
      $('#wrapper').removeClass('sb-active');
    }
  }
};

showPageById = function (targetPageId){
  var targetNode = $(targetPageId);
  if (!targetNode.length) {
    console.error('Bad targetId:' + targetPageId + '\nShould never get here!');
    targetPageId = DEFAULT_PAGEID;
    targetNode = $(targetPageId);
  }

  /*
  if (!historyStack) {
    historyStack = new Array(DEFAULT_PAGEID);
  }
  */

  var sourceNode = $(showingPageId);
  if (sourceNode.length) {
    sourceNode.removeClass('showing-page');
    /*
    if (showingPageId != DEFAULT_PAGEID) {
      historyStack.push(showingPageId);
    }
    */
  }

  targetNode.addClass('showing-page');
    /*
  if (targetPageId != historyStack[historyStack.length-1]) {
    historyStack.push(targetPageId);
  }
    */
  
  window.scrollTo(0, 0)
  showingPageId = targetPageId;
  //For sidebar on small screen
  if ($('#wrapper').hasClass('sb-active')) {
    $('#wrapper').removeClass('sb-active');
  }

  if (showingPageId == DEFAULT_PAGEID) {
    $('.goback').addClass('hide');
  } else {
    $('.goback').removeClass('hide');
  }

};
