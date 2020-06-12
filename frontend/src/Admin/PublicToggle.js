import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { update_post } from '../Redux/BlogActions'
import { change_edit_data } from '../Redux/AdminActions'
import Toggle from '../Utils/Toggle';


class PublicToggle extends Component {
  constructor(props) {
    super(props);
    this.update_public = this.update_public.bind(this);
  }

  update_public(e) {
    e.stopPropagation();
    const { dispatch, edit_data, selected_post } = this.props
    let old_value = this.props.edit_data.public
    let new_edit_data = {...edit_data, public: !old_value}
    dispatch(update_post(new_edit_data, selected_post))
    dispatch(change_edit_data(new_edit_data))
  }

  render() {
    const { edit_data } = this.props
    return (
      <Toggle checked={edit_data.public} width="50px" click_behavior={this.update_public}/>
    )
  }
}

PublicToggle.propTypes = {
  edit_data: PropTypes.object.isRequired,
  selected_post: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  const { edit_data, selected_post } = state.AdminReducer
  return { 
    edit_data: edit_data,
    selected_post: selected_post
  }
}


export default connect(mapStateToProps)(PublicToggle);
