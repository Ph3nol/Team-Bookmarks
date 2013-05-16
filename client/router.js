Meteor.Router.add({
  '/': { as: 'homepage', to: function() {
    Meteor.subscribe('bookmarks');

    return 'homePage';
  }},

  '/:categorySlug': { as: 'category', to: function (currentCategoryID) {
    var category = Categories.findOne(currentCategoryID);

    Meteor.subscribe('bookmarks', currentCategoryID);
    Session.set('currentCategoryID', currentCategoryID);

    return 'categoryPage';
  }}
});
