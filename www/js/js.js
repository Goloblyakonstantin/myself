
var body_width=$('html, body').width();
var body_height=$('html, body').height();
var height_y=6;
body_height=body_height-body_height/(height_y+1)
var min_x=body_width/100;
var min_y=body_height/100;

//для мобильных
if ($(window).width()<$(window).height())
{
    $('html, body').height($('html, body').height()/7*4)
    height_y=height_y/2;
    body_width=$('html, body').width();
    body_height=$('html, body').height();
    body_height=body_height-body_height/(height_y+1)
    min_x=body_width/100;
    min_y=body_height/100;
    move();
}

//после прелоадера
$(document).ready(function()
{
  setTimeout(start,1000)
});

//стартуем
function start()
{
  move();
  $(window).scrollTop(0);
}

//скролим
$(window).scroll(function()
{
  move();
});

//ресайзим
$(window).resize(function()
{
  body_width=$('html, body').width();
  body_height=$('html, body').height();
  body_height=body_height-body_height/(height_y+1)
  min_x=body_width/100;
  min_y=body_height/100;
  move();
});

//двигаем объекты
function move()
{
  scroll_top=$(window).scrollTop();
  //$('.moon').offset({top:$(window).scrollTop()-10*min_y/height_y+10*min_y/height_y*(body_height-$(window).scrollTop())/body_height});
  //$('.land_0').offset({top:$(window).scrollTop()+20*min_y/height_y+80*min_y/height_y*(body_height-$(window).scrollTop())/body_height});
  $('.moon').offset({top:scroll_top+5*min_y/height_y+$('.moon').height()+10*min_y/height_y*(body_height-scroll_top)/body_height});
  $('.land_0').offset({top:scroll_top+100*min_y/height_y-$('.land_0').height()+200*min_y/height_y*(body_height-scroll_top)/body_height});
  $('.land_1').offset({top:scroll_top+100*min_y/height_y-$('.land_1').height()+100*min_y/height_y*(body_height-scroll_top)/body_height});
  $('.land_2').offset({top:scroll_top+100*min_y/height_y-$('.land_2').height()+60*min_y/height_y*(body_height-scroll_top)/body_height});
  $('.mountain_0').offset({top:scroll_top+100*min_y/height_y-$('.mountain_0').height()+140*min_y/height_y*(body_height-scroll_top)/body_height});
  $('.mountain_1').offset({top:scroll_top+100*min_y/height_y-$('.mountain_1').height()+60*min_y/height_y*(body_height-scroll_top)/body_height});
  var tree=$('.tree_0');
  for (var i = 0; i < $('.tree_0').length; i++)
  {
    $(tree[i]).offset({top:scroll_top+100*min_y/height_y-$(tree[i]).height()*0.9+210*min_y/height_y*(body_height-scroll_top)/body_height});
  }

}
