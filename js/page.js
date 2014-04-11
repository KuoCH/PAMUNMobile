//Need init
//ex: showingPageId = '#page-main';
var showingPageId;

$(window).load( function () {
  var mainPage = $('.page').first();
  mainPage.addClass('showing-page');
  showingPageId = '#' + mainPage.attr('id');

});

function showPage(targetPageId){
  var targetNode = $(targetPageId);
  if (!targetNode.length) {
    console.error('Bad targetId');
    return;
  }
  var sourceNode = $(showingPageId);
  if (sourceNode.length) {
    sourceNode.removeClass('showing-page');
  } else {
    console.warn('variable showingPageId doesn\'t set appropriately.');
  }
  targetNode.addClass('showing-page');
  showingPageId = targetPageId;
  //For sidebar on small screen
  $('#wrapper').removeClass('sb-active');
}
