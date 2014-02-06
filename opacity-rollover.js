/*=====================================================
meta: {
  title: "jquery-opacity-rollover.js",
  varsion: "2.0",
  copy: "copyright 2009 h2ham (hasegawa@hamworks)",
  license: "MIT License(http://www.opensource.org/licenses/mit-license.php)",
  author: "THE HAM MEDIA - http://h2ham.seesaa.net/",
  date: "2009-07-21"
}
=====================================================*/
(function($) {
  
  $.fn.opOver = function(op,oa,durationp,durationa,options){
    
    var c = $.extend({
      opacityDef:op? op:1.0,
      opacityOn:oa? oa:0.6,
      fadeTime:durationp? durationp:'fast',
      fadeTimeOff:durationa? durationa:'fast'
    },options);
    

    $(this).each(function(){
      $(this).css({
          opacity: c.opacityDef,
          filter: "alpha(opacity="+c.opacityDef*100+")"
        }).hover(function(){
          $(this).fadeTo(c.fadeTime,c.opacityOn);
        },function(){
          $(this).fadeTo(c.fadeTimeOff,c.opacityDef);
        });
    });
  };
  
  $.fn.wink = function(durationp,op,oa,options){

    var c = $.extend({
      fadeTime:durationp? durationp:'slow',
      opacityDef:op? op:1.0,
      opacityOn:oa? oa:0.2
    },options);
    
    $(this).each(function(){
      $(this) .css({
          opacity: c.opacityDef,
          filter: "alpha(opacity="+c.opacityDef*100+")"
        }).hover(function(){
        $(this).css({
          opacity: c.opacityOn,
          filter: "alpha(opacity="+c.opacityOn*100+")"
        });
        $(this).fadeTo(c.fadeTime,c.opacityDef);
      },function(){
        $(this).css({
          opacity: c.opacityDef,
          filter: "alpha(opacity="+c.opacityDef*100+")"
        });
      });
    });
  };
  
})(jQuery);