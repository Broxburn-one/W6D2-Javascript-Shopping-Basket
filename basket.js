var basket = {
  items: [],
  has_card: false,

  add_item: function(item) {
    this.items.push(item)
  },
  remove_item: function(item) {

    idx = this.items.map(function(e) { 
      return e.name; 
    }).indexOf(item.name);


    if (idx > -1) {
      this.items.splice(idx, 1);
    }
  },

  find_total_price: function() {
    var total_price = 0;
    for (item of this.items) {
      total_price += item.price;
    }
   return total_price;
  },
  
  apply_discount: function() {
    var total_price = this.find_total_price();
    if (total_price > 20) {
      return total_price * 0.9;
    } else {
      return total_price;
    }
  },

  apply_card_discount: function() {
    var total_price = this.apply_discount();
    if (this.has_card === true) {
      return total_price * 0.95;
     } else {
      return total_price;
     }
  }
  // apply_bogof: function() {
  //   // create array of hashes listing name, price and count for each
  //   // loop through this and  divide by 2 then add the modulus
  //   // multiply price by this value and += to total_price
  //   var bogof = {
  //     name: "",
  //     price: 0,
  //     count: 0
  //   }
  //   for (item of this.items) {
  //     // check if item exists in bogof hash; if not add it; if it does, add 1 to it's count
      
  //   }


  // }

};

module.exports = basket;

