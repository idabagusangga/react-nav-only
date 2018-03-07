import React, { Component } from 'react';
import { connect } from 'react-redux'

class EditMeteor extends Component {
  constructor () {
    super()
    this.state = {
      meteorName: ''
    }
    // this.submitHandler = this.submitHandler.bind(this)
  }
  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name] : value
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.props.editMeteor({newName:this.state.meteorName, oldName:this.props.match.params.name} )
    e.target.meteorName.value = ''
  }
  render() {
    return (
      <div className='container'>
        <h1>Edit Meteor Name</h1>
        <form onSubmit={this.submitHandler}>
          <p>Meteor Name</p>
          <input type="text" name="meteorName" placeholder={this.props.match.params.name} onChange={this.handleChange}></input>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  editMeteor: (value) => dispatch({type: 'EDIT_METEOR', payload:value}) 
})


export default connect(null,mapDispatchToProps)(EditMeteor);