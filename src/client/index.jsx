import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class App extends React.Component {
  render() {
    let allTweets = tweets.map(tweet => {
      return <li><Tweet name={tweet.user.screen_name} text={tweet.text} /></li>
    });
    return (
      <div>
        <ul>
          {allTweets}
        </ul>
      </div>
    );
  }
}

class Tweet extends React.Component {
  render() {
    return (
      <div>
        <User name={this.props.name} />
        <Entities text={this.props.text} />
      </div>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.name}</h1>
      </div>
    );
  }
}

class Entities extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}


const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");