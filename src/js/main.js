$(document).ready(function(){
	var icon = $('#SetupGear__icon');
	var dropdown = $('#SetupDropdown');
			dropdown.toggle();

	// load menu item count
	var setupAppCount = $('#SetupAppMenu .slds-dropdown__item').length;
	$('#setupapp-count').text(setupAppCount);

	// gear hover image swap
   var imgs = [
    new Image(),
    new Image()
   ];

   imgs[0].src = 'img/setup.png';
   imgs[1].src = 'img/setup_hover.png';

   icon.hover(function(){
      $(this).html(imgs[1]);
   }, function(){
      $(this).html(imgs[0]);
   });

   // show dropdown on click
  icon.on('click', function(e){
  	e.stopPropagation();
		dropdown.toggle();
  });

  $(this).on('click', function(){
    if (dropdown.is(":visible")) {
        dropdown.hide();
    }
  });

});