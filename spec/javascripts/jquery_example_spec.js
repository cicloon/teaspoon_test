//= require jquery_example

describe("ItemGetter", function() {

  beforeEach(function(){
    fixture.load('jquery_example.html');
    this.ig = new window.ItemGetter;
  });

  it("should matchs the desired element", function(){
    expect( this.ig.items ).toBeMatchedBy('.items');
  });

  it("should handle the click event", function(){
    expect( this.ig.items.find('a') ).toHandleWith('click', this.ig.doSomething);
  });

});
