import React from "react";

export default class FilmPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const url = "https://xsolla-ss-films-api.herokuapp.com/posts";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const posts = data.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ));
        this.setState({ posts });
      });
  }

  render() {
    return (
      <React.Fragment>      
        <h1>Feed</h1>
      </React.Fragment>
    );
  }
}
