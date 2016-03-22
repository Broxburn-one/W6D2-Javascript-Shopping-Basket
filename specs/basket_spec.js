var assert = require('chai').assert;
var basket = require('../basket.js');

describe('basket', function() {

  it('should be empty at start', function() {
     assert.equal(0, basket.items.length);
  });

  it('should be able to add item', function() {
     basket.add_item({name: 'soap',
                      price: 2.50 });
     assert.equal(1, basket.items.length);
  });

   it('should remove items', function() {
     basket.remove_item({name: 'soap',
                      price: 2.50 });
     assert.equal(0, basket.items.length);
  });

   it('should find total price', function() {
    basket.add_item({name: 'soap',
                      price: 2.50 });
    basket.add_item({name: 'eggs',
                      price: 3.00 });
     basket.add_item({name: 'steak',
                      price: 6.00 });   

     assert.equal(11.50, basket.find_total_price());
   })

   it('should give discount for baskets over value 20', function() {
    basket.add_item({name: 'caviar',
                      price: 18.50 });
    assert.equal(27, basket.apply_discount());
   })

   it('should give 5% discount for card', function() {
    basket.has_card = true;
    assert.equal(25.65, basket.apply_card_discount())
   })

   it('should not give 5% discount if no card', function() {
    basket.has_card = false;
    assert.equal(27, basket.apply_card_discount());
   })


});