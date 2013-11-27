# aot-nodejs-feedparser-sample

This is the example code to go along with my [blog post on NodeJS and Feedparser](http://aceontech.com/howto/nodejs/2013/11/27/how-to-parse-rss-podcasts-with-nodejs.html).

## Running the project
Before you start, make sure you have NodeJS 0.10.x installed.
At the terminal, run:

```bash
$ cd FeedparserSample/
$ npm install
```

To run:

```bash
$ node app.js
```bash

## Usage example

Point your browser or REST client (e.g. [Postman for Google Chrome](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en))
to **http://localhost:3000/feed/http%3A%2F%2Fleoville.tv%2Fpodcasts%2Fsn.xml** (note the URL encoding).

You should see a similar result:

```javascript
{
    "feedName": "Security Now (MP3)",
    "website": "http://twit.tv/sn",
    "albumArtUrl": "http://feeds.twit.tv/podcasts/coverart/sn144audio.jpg",
    "episodes": [
        {
            "title": "SN 431: What is RADIUS?",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0431/sn0431.mp3",
            "publicationDate": "2013-11-20T23:37:37.000Z"
        },
        {
            "title": "SN 430: Your Questions, Steve's Answers #178",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0430/sn0430.mp3",
            "publicationDate": "2013-11-13T23:54:37.000Z"
        },
        {
            "title": "SN 429: Monkey Was 26th",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0429/sn0429.mp3",
            "publicationDate": "2013-11-06T23:31:20.000Z"
        },
        {
            "title": "SN 428: Your Questions, Steve's Answers #177",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0428/sn0428.mp3",
            "publicationDate": "2013-10-30T22:20:39.000Z"
        },
        {
            "title": "SN 427: A Newsy Week",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0427/sn0427.mp3",
            "publicationDate": "2013-10-23T22:54:46.000Z"
        },
        {
            "title": "SN 426: SQRL: Anti-Phishing and Revocation",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0426/sn0426.mp3",
            "publicationDate": "2013-10-16T22:15:32.000Z"
        },
        {
            "title": "SN 425: SQRL and Q & A #176",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0425/sn0425.mp3",
            "publicationDate": "2013-10-09T23:35:44.000Z"
        },
        {
            "title": "SN 424: SQRL",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0424/sn0424.mp3",
            "publicationDate": "2013-10-02T21:50:53.000Z"
        },
        {
            "title": "SN 423: Fingerprint Biometrics",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0423/sn0423.mp3",
            "publicationDate": "2013-09-25T22:00:49.000Z"
        },
        {
            "title": "SN 422: Your Questions, Steve's Answers #175",
            "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/twit.cachefly.net/audio/sn/sn0422/sn0422.mp3",
            "publicationDate": "2013-09-18T21:05:23.000Z"
        }
    ]
}
```
