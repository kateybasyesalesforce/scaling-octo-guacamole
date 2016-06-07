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

   imgs[0].src = '../../dist/img/setup.png';
   imgs[1].src = '../../dist/img/setup_hover.png';

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

  var tree = {"children": 
  [
    {
      "name": "Channels",
      "children": [
        {
          "name": "six",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        },
        {
          "name": "seven",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        },
        {
          "name": "eight",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        }
      ]
    },
    {
      "name": "Users",
      "children": [
        {
          "name": "two-six",
          "children": [
            { "name": "two-six-nine" },
            { "name": "ten" }
          ]
        },
        {
          "name": "seven",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        },
        {
          "name": "eight",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        }
      ]
    },
    {
      "name": "Automation",
      "children": [
        {
          "name": "six",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        },
        {
          "name": "seven",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        },
        {
          "name": "eight",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        }
      ]
    },
    {
      "name": "Knowledge",
      "children": [
        {
          "name": "six",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        },
        {
          "name": "seven",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        },
        {
          "name": "eight",
          "children": [
            { "name": "nine" },
            { "name": "ten" }
          ]
        }
      ]
    },
    {
      "name": "Analytics"
    }
  ]};

  // render tree
  $('#setup-tree').tree({
    childEl: 'li',
    childLabel: 'children',
    innerEl: 'div',
    innerElClass: '',
    // childOpeningHTML: "<li><div class='slds-tree__item'><button class='slds-button slds-m-right--x-small slds-is-disabled'><img src='img/chevron_right.svg'/><span class='slds-assistive-text'>Toggle</span></button><a href='#' tabindex='-1' role='presentation' class='slds-truncate'>",
    // childClosingHTML: "</a></div></li>",
    parentClass: 'parent',
    parentEl: 'ul',
    root: tree
  });

});