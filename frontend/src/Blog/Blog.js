import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Post from './Post';
import './Blog.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      total_height: -100000,
      top: 0,
      blog_column: null
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  componentWillMount() {
    this.callAPI();
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  componentDidMount() {
    this.setState({blog_column: document.getElementById("#blog-column")});
  }

  handleScroll(e) {
    e.stopPropagation();
    var newTop = this.state.top - e.deltaY;
    newTop = newTop > 0 ? 0 : newTop;
    newTop = newTop < this.state.total_height ? this.state.total_height : newTop;
    this.setState({top: newTop});
  }

  mouseOver(e) {
    disableBodyScroll(this.state.blog_column, {reserveScrollBarGap: true});
  }

  mouseOut(e) {
    enableBodyScroll(this.state.blog_column);
  }

  handlePostClick(e) {
    console.log("HELLO)");
  }


  callAPI() {
    fetch("http://localhost:4000/posts")
      .then(res => res.json())
      .then(res => this.setState({ 
        posts: res,
        total_height: -180 * (res.length - 1)
      }));
  }

  render() {    
    return (
      <div className='row all-blog-container'>
        <div className="col-sm-12 col-md-6 col-xl-4 blog-column post-column">
          <div className="row center post-column-title"><p className="h4">Recent Posts</p></div>
          <div className="row posts-mask" 
            onWheel={this.handleScroll}
            onMouseOver={this.mouseOver}
            onMouseOut={this.mouseOut}
          >
            <div className="total-blog-sleeve" style={{top: this.state.top + "px"}}>
              {this.state.posts.map(item => 
                <Post key={item._id} 
                  post_id={item._id} 
                  date={item.createtime} 
                  title={item.title} 
                  content={item.content} 
                  tags={item.tags} 
                  public={item.public} 
                  onCClick={this.handlePostClick}
                />
              )}
            </div>
          </div>
        </div>
        
        <div id="blog-column" className="col-sm-12 col-md-5 col-xl-7 dynamic-column blog-column">
          This is where the word art goes 
        </div>
      </div>
    );
  }
}

export default Blog;
