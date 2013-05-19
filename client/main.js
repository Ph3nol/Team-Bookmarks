Meteor.subscribe('categories');

Template.header.helpers({
  categories: function() { return Categories.find(); }
});

Template.notFound.helpers({
  categories: function() { return Categories.find(); }
});
