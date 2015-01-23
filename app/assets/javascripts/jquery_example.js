var ItemGetter = function(){
  this.items = $('.items');
  this.items.find('a').on('click', this.doSomething);
};


ItemGetter.prototype.doSomething = function(e){
  e.preventDefault();
  return $(e.target).data('label');
};
