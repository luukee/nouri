/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...


/*
 *
 * Custom(not original theme) JS
 * minimize and paste at the end of the "theme.min.js"
 * https://javascript-minifier.com/
 * si sénor :)
 *
 */


/*
 * Description list toggle
 * https://teamtreehouse.com/community/how-does-one-loop-through-elements-in-pure-javascript
 */
var desElements = document.querySelectorAll('.description-item:not(.link)');
    //looping through each anchor element
    desElements.forEach(function(element){
    //adding click event on each anchor element
        element.addEventListener('click',function(e){
            //stop default behaviour
            e.preventDefault();

            this.classList.toggle('selected'); //add class to current click element

    });
});




/*
 * Icon modals file: list-icon-snippet
 * https://alligator.io/js/classlist/
 */

var iconElement = document.querySelectorAll('.single__icon');
//looping through each anchor element
iconElement.forEach(function(element){
//adding click event on each anchor element
    element.addEventListener('click',function(e){

        //stop default behaviour
        e.preventDefault();

        this.classList.add('visible'); //add class to current click element

        this.addEventListener('click', () => {

            let modal = document.querySelector('.modal');

            this.classList.toggle("visible")
        });
    });
});


jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
