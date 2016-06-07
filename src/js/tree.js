(function ( $ ) {
 
	$.fn.tree = function( options ) {

		var settings = $.extend({
					childEl: 'li',
					childLabel: 'children',
					parentEl: 'ul',
					root: "no data"
		}, options );

		// -------- FUNCTIONS FOR RENDERING TREE -------- 
		function getClosingTag(el){
					return '</' + el + '>';
		}

		function getOpeningTag(el, className){
					if(className){
								return "<" + el + " class='" +  className + "'>";
					}
					else{
								return "<" + el + ">";
					}
		}

		var html = [];
		function traverse(children){
					// <ul>
					html.push(getOpeningTag(settings.parentEl));

					for (var i = 0; i <= children.length - 1; i++) {

								// check if there are children
								if (settings.childLabel in children[i]) {
											html.push(getOpeningTag(settings.childEl, 'parent closed'));
											html.push("<div class='slds-p-left--medium'><span id='setup-tree-icon-container'><img src='../../dist/img/chevron_down.svg'/></span><span class='slds-p-left--small'>" + children[i].name + "</span></div>");
											traverse(children[i][settings.childLabel]);
								}
								else{
											html.push(getOpeningTag(settings.childEl));
											html.push("<div class='slds-p-left--x-large'>" + children[i].name + "</div>");
								}
								// </li>
								html.push(getClosingTag(settings.childEl));
					}
					// </ul>
					html.push(getClosingTag(settings.parentEl));
		}

		traverse(settings.root[settings.childLabel]);
		
		this.append(html.join(''));


		// -------- FUNCTIONS FOR INTERACTIVITY -------- 

		function toggleCaret(el, closed) {
			var img = new Image();
			if(closed){
				img.src = '../../dist/img/chevron_right.svg';
			}
			else{
				img.src = '../../dist/img/chevron_down.svg';
			}
			el.html(img);
		}

		function toggleChildren(el){
			$(el.find('ul')[0]).toggle();
		}

		// Close everything first
		$('li.parent ul').toggle();
		
		$('ul').on('click', 'li', function(e){
			$(this).toggleClass('closed');

			if($(this).hasClass('parent')){
				toggleChildren($(this));

				// var iconContainer = $($(this).find('#setup-tree-icon-container')[0]);
						// toggleCaret(iconContainer, $(this).hasClass('closed'));
			}
		});

		$('li.parent ul li').on('click', function(e){
			e.stopPropagation();
			$(this).toggleClass('closed');

			if($(this).hasClass('parent')){
				toggleChildren($(this));

				// var iconContainer = $($(this).find('#setup-tree-icon-container')[0]);
						// toggleCaret(iconContainer, $(this).hasClass('closed'));
			}
		});

		return this;
	};
 
}( jQuery ));