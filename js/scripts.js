$(document).ready(function() {
  $("form#iceCream").submit(function(event) {
    const iceCreamArray = ["Pistachio", "Strawberry", "Chocolate","Vanilla"];
    iceCreamArray.forEach(function(thing) {
      $("#flavor").append(thing);
    })
    event.preventDefault();
  });
});