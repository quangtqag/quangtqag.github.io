src={`https://source.unsplash.com/${this.state.w}x${this.state.h}/?nature`}


<img 
  className='bg'
  alt=""
  ref="bg1"
  src={this.state.src1}
/>
<img 
  className='bg'
  alt=""
  ref="bg2"
  src={`https://source.unsplash.com/${this.state.w}x${this.state.h}/?water`} 
/>


img.bg {
  width: 100%;
  height: auto;
  z-index: -1;
  
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

// this.getScreenSize();


  // getScreenSize = () => {
  //   var d = document,
  //     e = d.documentElement,
  //     g = d.getElementsByTagName('body')[0],
  //     w = window.innerWidth || e.clientWidth || g.clientWidth,
  //     h = window.innerHeight|| e.clientHeight|| g.clientHeight;
    
  //   this.setState({w, h});
  // }


  bg = this.refs.bg1
  const src1 = bg.src
  const keyword = src1.split('?')[1]
  const index = this.keywords.indexOf(keyword)
  const newKeywords = this.keywords.slice(0, index).concat(this.keywords.slice(index + 1));
  const random = Math.floor(Math.random() * newKeywords.length)
  const newKeyword = newKeywords[random]
  const newSrc = `https://source.unsplash.com/random/?${newKeyword}`
  console.log('new src: ' + newSrc)
  this.setState({src1: newSrc})
