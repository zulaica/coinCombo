var coinCombo = function(cents){
  var pennies = 0, nickels = 0, dimes = 0, quarters = 0;
  var cents_array = [];

  while(cents >24){
    quarters++;
    cents = cents-25;
  };

  // for (;cents > 24; cents = cents - 25) { quarters++ }

  while(cents > 9) {
    dimes++;
    cents = cents - 10;
  }

  while(cents>4){
    nickels++;
    cents = cents-5;
  }

  while (cents > 0) {
    pennies++;
    cents = cents-1;
  };

  cents_array.push(pennies, nickels, dimes, quarters);

  return cents_array;
};

$(document).ready(function() {
  $("#coinCombo").submit(function(event) {
    var cents = parseInt($("#cents").val());
    var results = coinCombo(cents);
    $("#pennies").empty();
    $("#nickels").empty();
    $("#dimes").empty();
    $("#quarters").empty();

    if (results[0] > 1) {
      $("#pennies").text(results[0] + " pennies");
    } else if (results[0] == 1) {
      $("#pennies").text(results[0] + " penny");
    };

    if(results[1] > 1){
      $("#nickels").text(results[1] + " nickels");
    } else if (results[1] == 1){
      $("#nickels").text(results[1] + " nickel");
    };

    if(results[2] > 1){
      $("#dimes").text(results[2] + " dimes");
    } else if (results[2] == 1){
      $("#dimes").text(results[2] + " dime");
    };

    if(results[3] > 1){
      $("#quarters").text(results[3] + " quarters");
    } else if (results[3] == 1){
      $("#quarters").text(results[3] + " quarter");
    };

    if (cents > 0){
      $("#error").hide();
      $("#results").show();
    } else {
      $("#results").hide();
      $("#error").show();
    };
    event.preventDefault();
  });
});
