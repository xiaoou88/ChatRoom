import React from 'react';
import JSONPretty from 'react-json-pretty';

export default class CharRoomContainer extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.state = {
      result: null,
    }
  }

  // Remove the duplicated ones
  parseMentions(text = '') {
    let result = text.match(/@(\w+)?/g);
    return result ? result.map((m) => m.substring(1)) : [];
  }

  parseEmoticons() {

  }

  parseLinks() {

  }

  onClick() {
    let sourceText = this.inputBox.value,
      result = {
        mentions: this.parseMentions(sourceText),
        emoticons: [],
        links: [],
      };
    // parse mentions
    // this.outputBox.value = JSON.stringify(result);
    this.setState({ result: result });
  }

  render() {
    return (
      <div id="parse-body">
        <div className="box-wrapper">
          <textarea name="input-box" ref={ (input) => { this.inputBox = input; }}/>
        </div>
        <div id="process-button" onClick={ this.onClick }>
          Process
        </div>
        <div className="box-wrapper">
          {this.state.result && <JSONPretty id="json-pretty" json={this.state.result}/>}
          {/* <textarea name="output-box" ref={ (input) => { this.outputBox = input; }}/>*/}
        </div>
      </div>
    );
  }
}
