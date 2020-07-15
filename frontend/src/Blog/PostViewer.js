import React, { Component } from 'react';
import { format_date } from '../Utils/HelperFunctions';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch_post_by_id } from '../Redux/BlogActions'

import { 
  isMyImageURL,
  convertMyImageURL
} from '../Utils/HelperFunctions';

import './PostViewer.scss';

class PostViewer extends Component {  
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
      <div className="row post-viewer-container ">
        {isPostFetched && 
          <div className="col-11 offset-md-2 col-md-8 offset-xl-3 col-xl-6 post-viewer-main-col card-wrapper"> 
            <div className="row viewer-information-row">
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
            <div className="row viewer-title-row">
              {thisPost.title}
            </div>
            <div className="row viewer-content-row">
              {thisPost.content.map((i, key) => {
                if(isMyImageURL(i)){
                  return <img key={key} className="aws-image" src={convertMyImageURL(i)} alt="Loaded from AWS" /> 
                }
                else {
                  return <div className="content-paragraph" key={key}>{i}</div>
                }
              })}
            </div>
          </div>
        }
      </div>
    );
  }
}

PostViewer.propTypes = {
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

export default connect(mapStateToProps)(PostViewer);
