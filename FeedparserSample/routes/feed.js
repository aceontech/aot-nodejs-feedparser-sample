var FeedParser = require('feedparser');
var http = require('http');

exports.parse = function(req, res){
    // Retain referene to original response, so we can answer the user at some point
    var serverRes = res;

    // Get the feedUrl, which was passed in via the url, e.g. /feed/http%3A%2F%2Fleoville.tv%2Fpodcasts%2Fsn.xml
    var feedUrl = req.params.feedUrl;

    // Create a variable to store the feed's meta data, e.g. title, author, album art
    var feedMeta;

    // Create an array to hold episodes
    var episodes = [];

    // Get the feed by URL
    http.get(feedUrl, function(res) {

        // Give the 'res' stream to FeedParser for processing
        res.pipe(new FeedParser({}))

            // Handle HTTP errors
            .on('error', function(error){
                serverRes.status(500).json({
                    'message': 'HTTP failure while fetching feed'
                });
            })

            // Store the feed's metadata
            .on('meta', function(meta){
                feedMeta = meta;
            })

            // Every time a readable chunk arrives, add it to the episodes array
            .on('readable', function(){
                var stream = this, item;
                while (item = stream.read()){
                    var ep = {
                        'title': item.title,
                        'mediaUrl': item.link,
                        'publicationDate': item.pubDate
                    };

                    episodes.push(ep);
                }
            })

            // When everything completes, create a result JSON to hand back to the user
            .on('end', function(){
                serverRes.json({
                    'feedName': feedMeta.title,
                    'website': feedMeta.link,
                    'albumArtUrl': feedMeta.image.url,
                    'episodes': episodes
                });
            });
    });
};