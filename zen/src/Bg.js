import React, { Component } from 'react';
import './Bg.css';

class Bg extends Component {

constructor(props) {
    super(props);

    this.keywords = ['trees', 'mountains', 'changingleaves', 'forest', 'nature', 'pine', 'lakes', 'rivers', 'streams', 'meditation']
  }

  componentDidMount() {
    this.bg1 = this.refs.bg1
    this.bg2 = this.refs.bg2

    this.bg1.style.opacity = 1
    this.bg2.style.opacity = 0
    
    this.bg1.style.backgroundImage = `url('https://source.unsplash.com/random/?${this.keywords[0]}')`;
    this.bg2.style.backgroundImage = `url('https://source.unsplash.com/random/?${this.keywords[1]}')`;

    this.initBgSwitcher()
  }

  initBgSwitcher = () => {
    setInterval(this.switchBg, 20000);
  }

  switchBg = () => {
    console.log("switch bg")

    let isShown = this.bg1.style.opacity >= 1
    const promise1 = this.showBg(this.bg1, !isShown, "bg1")
    const promise2 = this.showBg(this.bg2, isShown, "bg2")
    Promise.all([promise1, promise2]).then(this.switchedBg);
  }

  switchedBg = (values) => {
    console.log("switched bg")
    let isHidden = this.bg1.style.opacity <= 0
    isHidden ? this.renewBg(this.bg1) : this.renewBg(this.bg2)
  }

  showBg = (bg, isShown, name) => {
    return new Promise(function(resolve) {
      console.log("show bg: " + name + " | isShown: " + isShown)
      
      let opacity = parseFloat(bg.style.opacity)
      // console.log("opacity: " + opacity)
      const time = 2000
      const step = isShown ? 0.01 : -0.01
      // console.log("step: " + step)
      const interval = time / (1 / 0.01)
      const timer = setInterval(frame, interval);
      
      function frame() {
        if ( (isShown === true && opacity >= 1.0)
          || (isShown === false && opacity <= 0)) {
          clearInterval(timer);
          resolve(name)
        } else {
          opacity += step
          // console.log(`name: ${name} opacity: ${opacity}`)
          bg.style.opacity = opacity
        }
      }
    })
  }

  renewBg = (bg) => {
    console.log('nenew bg')
    const src = bg.style.backgroundImage
    const keyword = src.split('?')[1]
    const index = this.keywords.indexOf(keyword)
    const newKeywords = this.keywords.slice(0, index).concat(this.keywords.slice(index + 1));
    const random = Math.floor(Math.random() * newKeywords.length)
    const newKeyword = newKeywords[random]
    const newSrc = `https://source.unsplash.com/random/?${newKeyword}`
    console.log('new src: ' + newSrc)
    bg.style.backgroundImage = `url('${newSrc}')`;
  }

  render() {
    return (
      <div>
        <div className="bg" ref="bg1"></div>
        <div className="bg" ref="bg2"></div>

        {/*<button onClick={this.switchBg}>Switch Bg</button>
        <button onClick={this.renewBg}>Renew Bg</button>*/}
      </div>
      );
  }

}

export default Bg;