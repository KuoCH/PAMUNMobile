//Need init
//ex: showingPageId = '#page-main';
var showingPageId;
var DEFAULT_PAGEID;

$(window).load( function () {

  DEFAULT_PAGEID = '#' + $('.page').first().attr('id');
  $(window).on('hashchange', checkUrlHash);
  checkUrlHash();

  $('.page .header').each(function(i) {
    this.innerHTML='<div class="header-wrapper"><img src="icons/logo_white.png"><div class="string">'+this.innerHTML+'</div></div>';
  });

  $('.page .header .header-wrapper').each(function(i) {
    jThis = $(this);
    jThis.width(4 + jThis.children('img').width() + jThis.children('.string').width() );
  });

  new ScrollIWant('.page .content', false, true);
});

checkUrlHash = function() {
  console.log('hahahah');
  if ($(window.location.hash).length == 0) {
    window.location.hash = DEFAULT_PAGEID;
  } else if ( showingPageId != window.location.hash ) {
    showPageById( window.location.hash );
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
  showingPageId = targetPageId;
  //For sidebar on small screen
  if ($('#wrapper').hasClass('sb-active')) {
    $('#wrapper').removeClass('sb-active');
  }
};
