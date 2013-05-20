Meteor.startup(function () {
  if (Meteor.isServer) {
    if (Categories.find().count() == 0) {
      categories = [
        {
          _id:  'web-development',
          name: 'Web Development'
        },
        {
          _id:  'linux-unix',
          name: 'Linux/Unix'
        },
        {
          _id:  'services',
          name: 'Services'
        },
        {
          _id:  'others',
          name: 'Others'
        }
      ];

      _.each(categories, function(category) {
        Categories.insert(category);
      });
    }

    if (Bookmarks.find().count() == 0) {
      bookmarks = [
        {
          title:       'Meteor',
          description: 'Meteor is an open-source platform for building top-quality web apps in a fraction of the time, whether you\'re an expert developer or just getting started.',
          url:         'http://www.meteor.com',
          createdAt:   1368625376810,
          likes:       0,
          uRates:      [],
          category_id: 'web-development'
        },
        {
          title:       'GitHub',
          description: 'GitHub is a web-based hosting service for software development projects that use the Git revision control system. GitHub offers both paid plans for private repositories, and free accounts for open source projects.',
          url:         'http://github.com',
          createdAt:   1368625376710,
          likes:       0,
          uRates:      [],
          category_id: 'services'
        },
        {
          title:       'Ph3nol@Github',
          description: 'This project author\'s GitHub account.',
          url:         'http://github.com/ph3nol',
          createdAt:   1368625376910,
          likes:       0,
          uRates:      [],
          category_id: 'others'
        }
      ];

      _.each(bookmarks, function(bookmark) {
        Bookmarks.insert(bookmark);
      });
    }
  }
});
