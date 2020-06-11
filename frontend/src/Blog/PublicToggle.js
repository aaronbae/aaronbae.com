import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { update_edit_changes } from '../Redux/AdminActions'
import Toggle from '../Common/Toggle';


class PublicToggle extends Component {
  constructor(props) {
    super(props);
    this.update_public = this.update_public.bind(this);
  }

  update_public(e) {
    e.stopPropagation();
    const { dispatch, edit_data } = this.props
    let old_value = this.props.edit_data.public
    let new_edit_data = {...edit_data, public: !old_value}
    dispatch(update_edit_changes(new_edit_data))
  }

  render() {
    const { edit_data } = this.props
    return (
      <Toggle checked={edit_data.public} width="50px" click_behavior={this.update_public}/>
    )
  }
}

PublicToggle.propTypes = {
  edit_data: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { edit_data } = state.BlogReducer
  return { edit_data: edit_data }
}


export default connect(mapStateToProps)(PublicToggle);
