Template.categoryPage.helpers({
  category: function() {
    return Categories.findOne(Session.get('currentCategoryID'));
  }
});
