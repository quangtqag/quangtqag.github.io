import React, { Component } from 'react';
import './Player.css';
import play from './icons/play.svg';
import pause from './icons/pause.svg';

class Player extends Component {

  constructor(props) {
    super(props);

    // this.tracks = ["test1", "test2", "test3", "test4", "test5"] 
    this.tracks = [
      "496928118-quang-quoc-tran-nhac-thien-hoa-tau",
      "496927863-quang-quoc-tran-hoa-sen-nuoc-chay",
      "496928481-quang-quoc-tran-nhac-thien",
      "496928604-quang-quoc-tran-tam-kinh-nhac-thien",
      "496911960-quang-quoc-tran-nhac-thien-yoga"
    ]
    this.curTrack = 0
    this.domain = 'http://feeds.soundcloud.com/stream/'

    this.state = { 
      play: false,
      url: `${this.domain}${this.tracks[0]}.mp3`
    };
  }

  componentDidMount() {
    this.refs.play.style.backgroundImage = `url(${play})`;
  }

  togglePlay = () => {
    if(this.state.play) {
      this.refs.audio.pause()
      this.refs.play.style.backgroundImage = `url(${play})`;
    }
    else {
      this.refs.audio.play();
      this.refs.play.style.backgroundImage = `url(${pause})`;
    }

    this.setState({ play: !this.state.play });
  }

  onEnded = () => {
    console.log("ended")
    this.nextTrack()
  }

  nextTrack = () => {
    console.log("next track")
    const next = ++this.curTrack % this.tracks.length
    this.setState({ url: `${this.domain}${this.tracks[next]}.mp3` })
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <button id="play" ref="play" onClick={this.togglePlay}></button>
        </div>
        {/*<button onClick={this.nextTrack}>Next Track</button>*/}
        <audio 
          preload="auto"
          src={this.state.url}
          ref="audio"
          //controls
          autoPlay
          onEnded={this.onEnded}>
        </audio>
      </div>
      );
  }

}

export default Player;
