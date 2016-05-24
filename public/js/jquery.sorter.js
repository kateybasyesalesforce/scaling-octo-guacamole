(function ( $ ) {
 
	$.fn.sorter = function(options) {
		var table = $(this);

		// Defaults that can be overridden
		var defaults = {
			appendToId: table.attr('id'),
			entityClass: 'entity',
			sorterClass: 'sorter'
		}
		var settings = $.extend({}, defaults, options);

		var sorters = $('.' + settings.sorterClass);
		var entities = $('.' + settings.entityClass);

		// Private Functions
		function sortTable(sortType, ascending){
			return function(a, b){
				var an = $(a).data(sortType);
				var bn = $(b).data(sortType);

				if(ascending){
					if(an > bn) { return 1 }
					else if(an < bn) { return -1 }
				}
				else if(!ascending){
					if(an > bn) { return -1 }
					else if(an < bn) { return 1 }
				}
				else{
					return 0;
				}
			}
		}

		// Sorting interaction
		table.on('click', '.' + settings.sorterClass, function(){
			var sorter = $(this);
			var sortType = sorter.attr('id');

			var isAscending = sorter.hasClass('ascending');

			console.log(sortType)

			if(isAscending){
				sorter.removeClass('ascending').addClass('descending');
				isAscending = false;
			}
			else{
				$('.descending').removeClass('descending');
				$('.ascending').removeClass('ascending');
				sorter.addClass('ascending');
				isAscending = true;
			}
			entities.sort(sortTable(sortType, isAscending));
			entities.remove().appendTo($('#'+settings.appendToId));
		});
		
		return this;
	};

}( jQuery ));