import {Component} from "react";
import React from "react";
import {Row} from "reactstrap";
import microphone from './microphone.png';
// eslint-disable-next-line no-undef
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition();

 recognition.continous = true;
 recognition.interimResults = true;
 recognition.lang = 'en-US';

class Input extends Component {

  constructor() {
    super()
    this.state = {
      listening: false,
      text: '',
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }


  handleListen() {
    if (this.state.listening) recognition.start()

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      this.setState({text: finalTranscript})
    }
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    if(this.state.text === '')
      return
    this.props.onSendMessage(this.state.text);
  }

  render() {
    const { innerWidth: width, innerHeight: height } = window;
    return (
      <div className="Input">
        <form >
          <div style={{width: width-100, backgroundColor: 'white', borderBottomWidth: 10 }}>
            <Row className="align-items-center">
              <input
                  style={{bordercolor: 'transparent', padding: 8, width: 500, marginBottom: 5, border: 'unset'}}
                  onChange={e => this.onChange(e)}
                  value={this.state.text}
                  type="text"
                  placeholder="Enter your message and press ENTER"
                  autoFocus="true"
              />
              <button onClick={this.toggleListen} style={{backgroundColor: 'transparent', border: 'unset'}} > <img src={microphone} alt="microphone" style={{width: 30, height: 30}}/></button>
              <button style={{backgroundColor: 'transparent', border: 'unset'}}  onClick={e => this.onSubmit(e)} >Send</button>
            </Row>
          </div>
        </form>
      </div>
    );
  }

}

export default Input;
