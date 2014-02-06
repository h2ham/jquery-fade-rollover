(function($) {
  $(function() {
    $.hamFunction.opacityRollOver({
      /* 適用させる部分の変更 */
      fnClass:'.over',
      /* デフォルトの透明度指定 */
      opacityDef:1.0,
      /* フェードの時間指定 */
      fadeTime:200,
      /* マウスオーバー時の透明度の指定 */
      opacityOn:0.6,
      /* マウスアウト時の最初の透明度の指定 */
      opacityOff:1.0
    });
  });

  $.hamFunction = {
    opacityRollOver: function(options){
      var c = $.extend(options);
      $(c.fnClass).each(function(){
        $(this).css('opacity',c.opacityDef)
          .hover(function(){
            $(this).fadeTo(c.fadeTime,c.opacityOn);
          },
          function(){
            $(this).fadeTo(c.fadeTime,c.opacityOff);
          }
        );
      });
    }
  };
})(jQuery);