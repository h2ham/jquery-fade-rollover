/*!
 * jQuery Fade Rollover Plugin v2.2.0
 * https://github.com/h2ham/jquery-fade-rollover.git
 *
 * Copyright 2014 Hiromu Hasegawa
 * Released under the MIT license
 */
(function ( $ ) {

  $.fn.opOver = function(op, oa, durationp, durationa){

    var c = {
      op : op ? op : 1.0,
      oa : oa ? oa : 0.6,
      durationp : durationp ? durationp : 'fast',
      durationa : durationa ? durationa : 'fast'
    };


    $(this).each(function () {
      $(this).css({
          opacity : c.op,
          filter : "alpha(opacity=" + c.op * 100 + ")"
        }).hover(function(){
          $(this).fadeTo(c.durationp, c.oa);
        },function(){
          $(this).fadeTo(c.durationa, c.op);
        });
    });
  };

  $.fn.wink = function (durationp, op, oa) {

    var c = {
      durationp : durationp ? durationp : 'slow',
      op : op ? op : 1.0,
      oa : oa ? oa : 0.2
    };

    $(this).each(function () {
      $(this).css({
          opacity : c.op,
          filter : "alpha(opacity=" + c.op * 100 + ")"
        }).hover(function () {
        $(this).css({
          opacity : c.oa,
          filter : "alpha(opacity=" + c.oa * 100 + ")"
        });
        $(this).fadeTo(c.durationp, c.op);
      }, function () {
        $(this).css({
          opacity : c.op,
          filter : "alpha(opacity=" + c.op * 100 + ")"
        });
      });
    });
  };

})( jQuery );