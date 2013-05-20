Meteor.publish('categories', function () {
  return Categories.find();
});

Meteor.publish('bookmarks', function (currentCategoryID) {
  queryParameters = {sort: {createdAt: -1}};

  if (currentCategoryID) {
    return Bookmarks.find({category_id: currentCategoryID}, queryParameters);
  } else {
    return Bookmarks.find({}, queryParameters);
  }
});
