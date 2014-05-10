//Need init
//ex: showingPageId = '#page-main';
var showingPageId;

$(window).load( function () {
  var mainPage = $('.page').first();
  mainPage.addClass('showing-page');
  showingPageId = '#' + mainPage.attr('id');
  $('.page .header').each(function(i,element) {
    //element.innerHTML=''+element.innerHTML;
  });

  new ScrollIWant('.page .content', false, true);
});

function showPage(targetPageId){
  var targetNode = $(targetPageId);
  if (!targetNode.length) {
    console.error('Bad targetId:'+targetPageId);
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
  if ($('#wrapper').hasClass('sb-active')) {
    $('#wrapper').removeClass('sb-active');
  }
}
