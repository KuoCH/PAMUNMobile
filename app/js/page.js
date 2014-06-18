//Need init
//ex: showingPageId = '#page-main';
var showingPageId;
var DEFAULT_PAGEID;

$(function () {

  DEFAULT_PAGEID = '#' + $('.page').first().attr('id');
  $(window).on('hashchange', checkUrlHash);
  checkUrlHash();

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
  }
  var sourceNode = $(showingPageId);
  if (sourceNode.length) {
    sourceNode.removeClass('showing-page');
  }
  targetNode.addClass('showing-page');
  window.scrollTo(0, 0)
  showingPageId = targetPageId;
  //For sidebar on small screen
  if ($('#wrapper').hasClass('sb-active')) {
    $('#wrapper').removeClass('sb-active');
  }
};
