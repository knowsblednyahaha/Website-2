$(function() {
  $('#a-1').hover(function() {
    $('.img').css({
      'background': 'url(../img/img-1.jpg) 0% 0% / 100% auto no-repeat'
      });
    }, function() {
    $('.img').css('background', '#000');
  });

  $('#a-2').hover(function() {
      $('.img').css({
          'background': 'url(../img/img-2.jpg) 0% 0% / 100% auto no-repeat'
      });
    }, function() {
      $('.img').css('background', '#000');
  });

  $('#a-3').hover(function() {
      $('.img').css({
        'background': 'url(../img/img-3.jpg) 0% 0% / 100% auto no-repeat'
        });
    }, function() {
      $('.img').css('background', '#000');
  });

  $('#a-4').hover(function() {
      $('.img').css({
          'background': 'url(../img/img-1.jpg) 0% 0% / 100% auto no-repeat'
      });
    }, function() {
      $('.img').css('background', '#000');
  });
});