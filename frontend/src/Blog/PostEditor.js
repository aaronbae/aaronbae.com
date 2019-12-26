import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './PostEditor.scss';

class PostEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selected_post, posts } = this.props
    return (
      <div className="row post-editor-container">
        {selected_post > -1 && 
          <div className="col post-editor-main-col"> 
            <div className="row title-row">
              <p className="h3">{posts[selected_post].title}</p>
            </div>
            <div className="row information-row">
              <div className="col-5 no-padding">
                {posts[selected_post].createtime}
              </div>
              <div className="col-7 no-padding">
                <div className="float-right">
                  <span className="tag">Tags : </span>
                  {posts[selected_post].tags.map((item, index) =>
                    <span key={index} className={"tag " + item}>
                      {item + ", "}                  
                    </span>
                  )}
                  <span className="edit-button" >Edit Post</span>
                </div>
              </div>
            </div>
            <div className="row content-row">
              {posts[selected_post].content}
            </div>
          </div>
        }
      </div>
    );
  }
}

PostEditor.propTypes = {
  selected_post: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selected_post, posts } = state.BlogReducer
  return {
    selected_post: selected_post,
    posts: posts
  }
}

export default connect(mapStateToProps)(PostEditor);
