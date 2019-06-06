$(function() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  if (window.innerWidth >= 768) {
    // 小要素が.l-flex-col-3の場合、親要素にclassを追加する
    $('.l-flex-col-3').parent().addClass('l-flex-parent-3');
    // 小要素が.l-flex-col-4の場合、親要素にclassを追加する
    $('.l-flex-col-4').parent().addClass('l-flex-parent-4');
  }

});
