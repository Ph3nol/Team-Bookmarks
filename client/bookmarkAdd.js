Template.bookmarkAdd.helpers({
  categories: function() { return Categories.find(); }
});

Template.bookmarkAdd.events = {
  'submit': function (e) {
    e.preventDefault();

    if (Meteor.user()) {
      var bookmarkForm = $('#add-bookmark-form');

      var bookmark = {
        title:       $('input[name=bookmark_title]', bookmarkForm).val(),
        url:         $('input[name=bookmark_url]', bookmarkForm).val(),
        description: $('textarea[name=bookmark_description]', bookmarkForm).val(),
        createdAt:   (new Date()).getTime(),
        likes:       0,
        uRates:      [],
        category_id: $('select', bookmarkForm).val() ? $('select', bookmarkForm).val() : null,
        user_id:     Meteor.user()._id
      };

      $('input[type=text], input[type=url], textarea', bookmarkForm).each(function () {
        $(this).val('');
      });

      $('select', bookmarkForm).val($('select option:first', bookmarkForm).val());
      $('input[type=text]:first').focus();

      Bookmarks.insert(bookmark);
    }
  }
};
