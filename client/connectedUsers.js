Template.connectedUsers.helpers({
    connectedUsers: function() { return Meteor.presences.find(); },
    user: function() {
        user = Meteor.users.findOne(this.userId);

        if (!user) {
            return {
                name:     'Anonymous',
                imageSrc: Gravatar.imageUrl('anonymous@slynett.com', {s: 32, d: 'mm'})
            };
        }

        return {
            name:     user.services.github.username,
            imageSrc: Gravatar.imageUrl(user.services.github.email, {s: 32, d: 'mm'})
        };
    }
});
