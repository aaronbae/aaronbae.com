import React, { Component } from 'react';
import { format_date } from '../Common/Utils';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch_post_by_id } from '../Redux/BlogActions'

import './PostViewer.scss';

class PostEditor extends Component {  
  componentDidMount() {
    const { dispatch } = this.props
    let post_id = this.props.match.params["id"]
    dispatch(fetch_post_by_id(post_id))
    window.scrollTo(0, 0) // Need to scroll to top if coming from /blog
  }

  render() {
    const { posts } = this.props
    let post_id = this.props.match.params["id"]
    let isPostFetched = posts.length > 0
    // TOOD: Remember that we don't have spinner div developed yet
    if( isPostFetched ) {
      var id2index = this.props.id2index
      var thisPost = posts[id2index[post_id]]
    }
    return (
      <div className="row">
        <div className="col-2 previous-button-area">
        </div>
        <div className="col-8">
          <div className="row post-editor-container">
            {isPostFetched && 
              <div className="col post-editor-main-col"> 
                <div className="row title-row">
                  <p className="h3">{thisPost.title}</p>
                </div>
                <div className="row information-row">
                  <div className="col-5 no-padding">
                    {format_date(thisPost.createtime)}
                  </div>
                  <div className="col-7 no-padding">
                    <div className="float-right">
                      <span className="tags-label">Tags : </span>
                      {thisPost.tags.map((item, index) =>
                        <span key={index} className={"tag " + item}>
                          {item + ", "}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="padding-row row"></div>
                <div className="row content-row">
                  {thisPost.content.split("\n").map((i, key) => {
                    return <div className="content-paragraph" key={key}>{i}</div>
                  })}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

PostEditor.propTypes = {
  id2index: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { posts, id2index } = state.BlogReducer
  return {
    id2index: id2index,
    posts: posts
  }
}

export default connect(mapStateToProps)(PostEditor);