/* jshint node: true */
'use strict';


var _      = require('lodash');
var moment = require('moment');
var posts  = require(__dirname + '/../../fixtures/posts.json');


var index = function(req, res) {
  var pageSize = 5;
  var from = Number(req.query.from) || 0;
  var topics = req.query.topics;
  var thePosts = posts;

  if (topics) {
    thePosts = _.filter(posts, function(post) {
      if (topics instanceof Array) {
        return _.intersection(post.topics, topics).length;
      } else {
        return !!~post.topics.indexOf(topics);
      }
    });
  }

  var resultset = (from) ?
    thePosts.slice((from - 1), (from + pageSize - 1)) :
    thePosts.slice(0, pageSize);

  var payload = {
    data: {
      posts: resultset,
    },
    meta: {
      posts: {
        hasMore: !!thePosts[from + pageSize - 1],
      }
    }
  };

  res.send(payload);
};

var show = function(req, res) {
  var uuid = req.params.uuid;
  var post = _.find(posts, function(post) {
    return post.uuid === uuid;
  });

  if (post) {
    var payload = {
      data: {
        post: post
      }
    };

    res.send(payload);
  } else {
    res.status(404).end();
  }
};

var save = function(req, res) {
  var author = req.body.author;
  var text = req.body.text;
  var postRecord = {
    author: author,
    created: moment().format('YYYY-MM-DD HH:mm:ss'),
    event: null,
    files: [],
    text: text,
    uuid: _.uniqueId(),
  };

  posts.unshift(postRecord);
  setTimeout(function() {
    res.send(postRecord);

  }, 3000);
};

var remove = function(req, res) {
  var uuid = req.params.uuid;
  var post = _.find(posts, function(post) {
    return post.uuid === uuid;
  });

  if (post) {
    posts.splice(posts.indexOf(post), 1);
    res.status(200).end();
  } else {
    res.status(404).end();
  }
};


exports = module.exports = function(apiRouter) {
  apiRouter.get('/posts', index);
  apiRouter.get('/posts/:uuid', show);
  apiRouter.post('/posts', save);
  apiRouter.delete('/posts/:uuid', remove);
};
