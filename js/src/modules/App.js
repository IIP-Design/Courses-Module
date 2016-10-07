const React   = require('react');
const Course  = require('./Course');
                require('./App.scss');


const data = {
  id: 29,
  title: "My course",
  description: "<p>Look a description with raw HTML</p>",
  excerpt: "Look an excerpt, which is different than the description, an isn't raw HTML",
  media: {
    id: 1,
    src_url: "http://placekitten.com/400/200",
    file_url: "",
    duration: "",
    width: 400,
    height: 200,
    format: "image",
    title: "A cute kitten",
    alt: "A kitten looking off the edge of a counter",
    caption: "",
    transcript: "",
    responsive_images: {}
  }
};


const App = React.createClass({
  render: function () {
    return (
      <div>
        <Course data={ data } />
      </div>
    );
  }
});

module.exports = App;
