import React, { Component } from 'react';

// Redux handlers
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  fetch_public_posts
} from '../Redux/BlogActions'

import { query_param_string_to_objects } from "../Utils/HelperFunctions"

// components 
import PostCard from './PostCard';
import './MainBlogPage.scss';

class MainBlogPage extends Component {
  constructor(props) {
    super(props)
    this.paginate = this.paginate.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    let query = query_param_string_to_objects(this.props.location.search)
    let skip = 0
    if("skip" in query){
      skip = query.skip
    }
    dispatch(fetch_public_posts(skip))
  }

  paginate(e) {
    const { dispatch } = this.props
    let skip = 5 * (Math.min(
      this.props.total_pages, 
      Math.max(1, e.target.getAttribute("page_direct")
    )) - 1)
    dispatch(fetch_public_posts(skip))
    this.props.history.push(`/blog?skip=${skip}`)
    window.scrollTo(0, 0)
  }

  render() { 
    const { posts, current_page, total_pages } = this.props
    let pagination_indices = Array(total_pages).fill()
    return (
      <div className='row all-blog-container'>
        <div className="offset-1 col-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 card-wrapper">
          <div className="row whats-new-container">What's New?</div>
          <div className="card-title-break"></div>
          <div className="row post-container">
            {posts.map((item, index) => 
              <PostCard key={index} post_id={item._id} />
            )}
          </div>
          {posts.length > 0 && 
            <div className="row page-selector">
              <span id="pagination-left" className="pagination-button" page_direct={current_page-1} onClick={this.paginate}>{"<"}</span>
              {pagination_indices.map((_, index) =>
                <span key={index} 
                  className={current_page===index+1 ? "pagination-button active" : "pagination-button"} 
                  page_direct={index + 1} 
                  onClick={this.paginate}>
                    {index + 1}
                </span>
              )}
              <span id="pagination-right" className="pagination-button" page_direct={current_page+1} onClick={this.paginate}>{">"}</span>
            </div>
          }
        </div>
      </div>
    );
  }
}
MainBlogPage.propTypes = {
  current_page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { 
    current_page: state.BlogReducer.current_page,
    total_pages: state.BlogReducer.total_pages,
    posts: state.BlogReducer.posts,
    logged_in: state.AdminReducer.logged_in 
  }
}

export default connect(mapStateToProps)(MainBlogPage);
