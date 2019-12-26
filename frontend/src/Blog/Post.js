import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
  constructor(props) {
    super(props);
    
    // Formatting tags array
    const tags = []
    for(var i = 0; i < props.tags.length; i++){
      tags.push({
        id: i,
        label: props.tags[i]
      })
    }

    // Initializing this.state
    this.state = {
      id: props.post_id,
      date: props.date,
      title: props.title,
      tags: tags,
      public: props.public,
      clickbehavior: props.clickbehavior,
      postindex: props.postindex
    };
  }

  render() {
    return (
      <div className={this.state.public?"row individual-post-container":"row hidden individual-post-container"} 
        onClick={this.state.clickbehavior}
        postindex={this.state.postindex}
      >
        <div className="individual-post">
          <div className="offset-1 col-10">
            <div className="row date">{this.state.date}</div>
            <div className="row title"><p className="h5">{this.state.title}</p></div>
            <div className="row">
              {this.state.tags.map(item =>
                <span key={item.id} className={"tag " + item.label}>
                  {item.label}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;