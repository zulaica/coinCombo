var coinCombo = function(cents){
  var pennies = 0;
  var nickels = 0;
  var dimes = 0;
  var quarters = 0;
  var cents_array = []

  if (cents > 25){
    while(cents >24){
      quarters++;
      cents = cents-25;
    };
  };

  if (cents > 10) {
    while(cents > 9) {
      dimes++;
      cents = cents - 10;
    };
  };

  if(cents>5){
    while(cents>4){
      nickels++;
      cents = cents-5;
    };
  };


  if (cents<5){
    while (cents > 0) {
      pennies++;
      cents = cents-1;
    };
  };

  cents_array.push(pennies, nickels, dimes, quarters);

  return cents_array;


};
