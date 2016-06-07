// // var Person = function(name, age){

// // }

// function addGen(x){
//    return function(second){
//          return x + second;
//    };
// }

// var add10 = addGen(10);
// console.log(add10(15)); // 25

// var add4 = addGen(4);
// console.log(add4(8)); // 12


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
                        html.push(getOpeningTag(settings.childEl, 'parent'));
                        html.push("<div id='setup-tree-icon-container' class='slds-p-left--medium'><img src='../../dist/img/chevron_right.svg'/><span class='slds-p-left--small'>" + children[i].name + "</span></div>");
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

      // Close everything first
      $(".parent " + settings.parentEl).toggle();
      $(this).find('.parent').addClass('closed');

      $(this).on('click', settings.childEl, function(e){
            e.stopPropagation();
            if($(this).hasClass('parent')){
                  $(this).toggleClass('closed');
                  $(this).find(settings.parentEl).toggle();
            }
      });

                  return this;
    };
 
}( jQuery ));