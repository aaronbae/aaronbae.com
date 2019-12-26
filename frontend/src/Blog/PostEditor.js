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
          <div className="offset-1 col-10">
            <div className="row date">{posts[selected_post].createtime}</div>
            <div className="row title"><p className="h5">{posts[selected_post].title}</p></div>
            <div className="row content-container">
              <div className="col">
                <div className="row content">
                {posts[selected_post].content}
                </div>
                <div className="row tag-row">
                  <span className="tag-label">Tags:</span>
                  {posts[selected_post].tags.map((item, index) =>
                    <span key={index} className={"tag " + item}>
                      {item}
                    </span>
                  )}
                </div>
              </div>
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
