Meteor.publish('test_subscription', function() {
  var language = get_http_header(this, 'ACCEPT_LANGUAGE'),
      client   = get_http_remote_ip(this)
  ;

  console.log('Client', client, 'requested language preference', language);
});

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
