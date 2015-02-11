var coinCombination = function(cents){
  var pennies = 0;
  var nickels = 0;
  var dimes = 0;
  var quarters = 0;
  var cents_array = []

  if (cents<5){
    while (cents > 0) {
      pennies++;
      cents = cents-1;
    };
  };

  cents_array.push(pennies);
  cents_array.push(nickels);
  cents_array.push(dimes);
  cents_array.push(quarters);
  return cents_array;


};
