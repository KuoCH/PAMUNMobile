//Need init
//ex: showingPageId = '#page-main';
var showingPageId;

$(window).load( function () {
  var mainPage = $('.page').first();
  mainPage.addClass('showing-page');
  showingPageId = '#' + mainPage.attr('id');
  $('.page .header').each(function(i) {
    this.innerHTML='<div class="header-wrapper"><img src="icons/logo_white.png"><div class="string">'+this.innerHTML+'</div></div>';
  });

  $('.page .header .header-wrapper').each(function(i) {
    jThis = $(this);
    jThis.width(4 + jThis.children('img').width() + jThis.children('.string').width() );
  });

  new ScrollIWant('.page .content', false, true);
});

showPage = function (e){
  var targetPageId = $(this).attr('pageId');
  var targetNode = $(targetPageId);
  if (!targetNode.length) {
    console.error('Bad targetId:' + targetPageId + '\nfor element:');
    console.error(this);
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
