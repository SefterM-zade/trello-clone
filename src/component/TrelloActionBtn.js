import React, { Component } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { connect } from 'react-redux'
import { addList, addCard } from '../action'

class TrelloActionBtn extends Component {
  state = {
    showForm: false,
    text: '',
  }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  showForm = () => {
    this.setState({ showForm: true })
  }

  closeForm = () => {
    this.setState({ showForm: false, text: '' })
  }

  addList = () => {
    const { dispatch } = this.props

    const { text } = this.state

    if (text) {
      dispatch(addList(text))
      this.setState({ text: '' })
    }
  }

  addCard = () => {
    const { dispatch, listId } = this.props
    const { text } = this.state

    if (text) {
      dispatch(addCard(listId, text))
      this.setState({ text: '' })
    }
  }

  addButtonRender = () => {
    const btnText = this.props.list ? 'Add another list' : 'Add another card'
    const btnClassName = this.props.list ? 'btn-add-list' : 'btn-add-card'

    return (
      <div className='list-footer'>
        {/* <button className='btn-add-card' onClick={this.showForm}>
          <i className='fas fa-plus icon-add'></i>
          {btnText}
        </button> */}
        <button className={btnClassName} onClick={this.showForm}>
          <i className='fas fa-plus icon-add'></i>
          {btnText}
        </button>
      </div>
    )
  }

  formRender = () => {
    const placeholder = this.props.list
      ? 'Enter list title...'
      : 'Enter a title for this card...'

    const btnText = this.props.list ? 'Add List' : 'Add Card'

    return (
      <React.Fragment>
        <div
          className='list-card'
          style={
            this.props.list ? { margin: '8px' } : { margin: '0 8px 8px 8px' }
          }
        >
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            className='custom-textarea'
            onChange={this.onChange}
            value={this.state.text}
            onBlur={this.closeForm}
          />
        </div>
        <div className='btn-container'>
          <button
            className='btn-form-card'
            onMouseDown={this.props.list ? this.addList : this.addCard}
          >
            {btnText}
          </button>
          <i className='fas fa-times icon-close' onClick={this.closeForm}></i>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return this.state.showForm ? this.formRender() : this.addButtonRender()
  }
}

export default connect()(TrelloActionBtn)
