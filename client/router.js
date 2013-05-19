Meteor.Router.add({
  '/': { as: 'homepage', to: function() {
    Meteor.subscribe('bookmarks');

    return 'homePage';
  }},

  '/:_id': { as: 'category', to: function (currentCategoryID) {
    var category = Categories.findOne(currentCategoryID);

    if (!category) {
      return 'notFound';
    }

    Meteor.subscribe('bookmarks', currentCategoryID);
    Session.set('currentCategoryID', currentCategoryID);

    return 'categoryPage';
  }},

  '*': 'notFound'
});
