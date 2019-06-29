import React, { Component } from 'react';
import Messages from "./Messages";
import Input from "./Input"

class Charts extends Component {
  state = {
    messages: [
      {
        text: "This is a test message asdas a asd a asd asd asd as asd asd a asd asda a!",
        member: {
          image: 'https://cdn.shopify.com/s/files/1/0043/8471/8938/products/155613364003514899.jpg?v=1556133795',
          user: false,
          color: "blue",
          username: "bluemoon"
        }
      }
    ],
    member: {
      image: 'https://66.media.tumblr.com/bab328ff95d644edaa180a215acce3e3/tumblr_oo7b50QrGo1tq5811o1_500.jpg',
      user: true,
      username: "Duc Skt",
      color: "red"
    }
  }

  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
      member: this.state.member
    })
    this.setState({messages: messages})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>My Chat App</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <div style={{position: 'fixed', bottom: 0}}>
          <Input
              onSendMessage={this.onSendMessage}
          />
        </div>
      </div>
    );
  }
}

export default Charts;
