Template.bookmarkAdd.helpers({
  categories: function() { return Categories.find(); }
});

Template.bookmarkAdd.events = {
  'submit': function (e, template) {
    e.preventDefault();

    if (Meteor.user()) {
      var bookmarkForm = template.find('form');

      var bookmark = {
        title:       template.find('form input[name=bookmark_title]').value,
        url:         template.find('form input[name=bookmark_url]').value,
        description: template.find('form textarea[name=bookmark_description]').value,
        createdAt:   (new Date()).getTime(),
        likes:       0,
        uRates:      [],
        category_id: (template.find('form select[name=bookmark_category_id]').value || null),
        user_id:     Meteor.user()._id
      };

      Bookmarks.insert(bookmark, function (err) {
        if (!err) {
          _.each(template.findAll('form input[type=text], form input[type=url], form textarea'), function(input) {
            input.value = '';
          });

          template.find('form input[name=bookmark_title]').focus();
        }
      });
    }
  }
};
