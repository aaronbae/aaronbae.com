import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Post from './Post';
import './Blog.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], // Need this to remember the query for the posts
      total_height: -100000, // Need this attribute to set boundaries of the scrolling
      top: 0, // Need this attribute to scroll
      blog_column: null, // Need this DOM element to disable scrolling
      dynamic_panel: -1
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  // Standard React Component methods

  componentWillMount() {
    this.callAPI();
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  componentDidMount() {
    this.setState({blog_column: document.getElementById("#blog-column")});
  }

  // EVENT HANDLERS

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
    e.stopPropagation();
    const index = e.currentTarget.getAttribute("postindex");
    this.setState({dynamic_panel: index});
  }

  // API Request Functions

  callAPI() {
    fetch("http://localhost:4000/posts")
      .then(res => res.json())
      .then(res => this.setState({ 
        posts: res,
        total_height: -174 * (res.length - 1)
      }));
  }

  // Render the component

  render() {    
    return (
      <div className='row all-blog-container'>
        <div id="blog-column" className="col-sm-12 col-md-6 col-xl-4 blog-column post-column">
          <div className="row center post-column-title"><p className="h4">Recent Posts</p></div>
          <div className="row posts-mask" 
            onWheel={this.handleScroll}
            onMouseOver={this.mouseOver}
            onMouseOut={this.mouseOut}
          >
            <div className="total-blog-sleeve" style={{top: this.state.top + "px"}}>
              {this.state.posts.map((item, index) => 
                <Post key={item._id} 
                  post_id={item._id} 
                  date={item.createtime} 
                  title={item.title} 
                  content={item.content} 
                  tags={item.tags} 
                  public={item.public} 
                  clickbehavior={this.handlePostClick}
                  postindex={index}
                />
              )}
            </div>
          </div>
        </div>
        
        <div className="col-sm-12 col-md-5 col-xl-7 dynamic-column blog-column">
          THis is where the word art goes.
        </div>
      </div>
    );
  }
}

export default Blog;
