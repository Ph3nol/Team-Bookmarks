Meteor.publish('userPresence', function() {
  return Meteor.presences.find({}, {fields: {state: true, userId: true}});
});

Meteor.publish('categories', function () {
  return Categories.find();
});

Meteor.publish('users', function () {
  return Meteor.users.find();
});

Meteor.publish('bookmarks', function (currentCategoryID) {
  queryParameters = {sort: {createdAt: -1}};

  if (currentCategoryID) {
    return Bookmarks.find({category_id: currentCategoryID}, queryParameters);
  } else {
    return Bookmarks.find({}, queryParameters);
  }
});
