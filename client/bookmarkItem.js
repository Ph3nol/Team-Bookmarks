Template.bookmarkItem.helpers({
  createdAt:  function () { return moment(this.createdAt).fromNow(); },
  category:   function () { return Categories.findOne(this.category_id); },
  user:       function () { return Meteor.users.findOne(this.user_id); },
  isAuthor:   function () { return (Meteor.user() && (Meteor.user()._id === this.user_id)); },
  likesUsers: function () { return Meteor.users.find({_id: {$in: this.uRates}}); }
});

Template.bookmarkItem.events = {
  'click button.action-delete': function (e) {
    e.preventDefault();

    if (Meteor.user()._id === this.user_id) {
      Bookmarks.remove(this._id);
    }
  },
  'click button.action-like': function (e) {
    e.preventDefault();

    alreadyRated = Bookmarks.findOne({_id: this._id, uRates: {$in: [Meteor.user()._id]}});

    if (!alreadyRated) {
      Bookmarks.update(this._id, {$inc: {likes: 1}, $push: {uRates: Meteor.user()._id}});
    }
  }
};
