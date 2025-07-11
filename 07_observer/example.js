const EventEmitter = require("events");

class NewsPublisher extends EventEmitter {
  publishNews(news) {
    console.log("Publishing news: ", news);
    this.emit("newsPublished", news);
  }
}

const newPublisher = new NewsPublisher();

newPublisher.on("newsPublished", (news) => {
  console.log("Subscriber 1 received", news);
});

newPublisher.on("newsPublished", (news) => {
  console.log("Subscriber 2 received", news);
});
