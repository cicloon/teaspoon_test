//= require file1

describe("thing", function() {

  describe("#foo", function(){
    it("should return bar", function(){            
      expect( window.thing.foo() ).toBe("bar")
    });
  });

});

describe("Person", function(){

  beforeEach(function(){
    this.person = new window.Person('Pepe')
  });

  describe("#name", function(){
    it("should return Pepe", function(){
      expect(this.person.name).toBe('Pepe')
    });
  });

});
