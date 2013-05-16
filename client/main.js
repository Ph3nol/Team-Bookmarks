Meteor.subscribe('categories');

Template.header.helpers({
  categories: function() { return Categories.find(); }
});
