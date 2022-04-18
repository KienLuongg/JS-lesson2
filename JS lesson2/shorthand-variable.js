// METHOD 1
var price = 5;
var quntity = 14;
var total = price * quntity;

/* METHOD 2
var price, quantity, total;
price = 5;
quantity = 12;
total = price * quantity;
 */

/* METHOD 3
var price = 5, quantity = 12;
var total = price * quantity;
 */

var el = document.getElementById('cost');
el.textContent ='$' + total;