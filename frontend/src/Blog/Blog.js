import React, { Component } from 'react';
import Post from './Post';
import './Blog.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      total_height: -100000,
      top: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.callAPI();
  }

  handleScroll(e) {
    e.stopPropagation();
    var newTop = this.state.top + e.deltaY;
    newTop = newTop > 0 ? 0 : newTop;
    newTop = newTop < this.state.total_height ? this.state.total_height : newTop;
    this.setState({top: newTop});
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
      <div className='container-fluid all-panel-container'>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xl-4 post-column blog-column" onWheel={this.handleScroll}>
            <div className="total-blog-sleeve" style={{top: this.state.top + "px"}}>
              {this.state.posts.map(item => 
                <Post key={item._id} post_id={item._id} date={item.createtime} title={item.title} content={item.content} tags={item.tags} public={item.public} />
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-xl-7 dynamic-column blog-column">
            This is where the word art goes 
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
