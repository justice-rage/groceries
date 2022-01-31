$(document).ready(function() {
  // grocery array
  $("form#grocery").submit(function(event) {
    const groceries = [$("input#item-one").val(), $("input#item-two").val(), $("input#item-three").val()];  

    //alphebetical ordered array
    const alphebetArray = groceries.sort();
    
    // capitalize array
    const uppercased = alphebetArray.map(name => name.toUpperCase());

    // const upperCaseArray = alphebetArray.toUpperCase();
    
    // output mutated array
    uppercased.forEach(function(thing) {
      $("#final-result").append(thing);
    })
    event.preventDefault();
  });
});