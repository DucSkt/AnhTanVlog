import {Component} from "react";
import React from "react";
import {Col, Row} from "reactstrap";
import CardText from "reactstrap/es/CardText";

class Messages extends Component {

  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    if(member.user) {
      this.textAlign = 'right'
    }
    else {
      this.textAlign = 'left'
    }
    return (
      <div className={className} style={{marginTop: 30, flex: 1,}}>
       <Row style={{ textAlign: this.textAlign, marginRight: 25 }}>
         {
           (member.user) ? (<img src={member.image} style={{height: 50, width: 50, borderRadius: '50%', position: 'absolute', right: 0 }} />) :
               (<img src={member.image} style={{height: 50, width: 50, borderRadius: '50%' }} />)
         }

         <Col col="12" xl className="mb-3 mb-xl-0" style={{marginTop: -10}}
         >
           <CardText style={{color: 'gray'}}>{member.username}</CardText>
             <label style={{padding:10,borderRadius:15, marginTop: -10, background: 'lightgray', width: 400, textAlign: 'left' }} >{text}</label>
         </Col>
       </Row>
      </div>
    );
  }

  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;
