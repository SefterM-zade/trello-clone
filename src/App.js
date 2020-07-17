import React, { Component } from 'react'
import TrelloList from './component/TrelloList'
import { connect } from 'react-redux'
import TrelloActionBtn from './component/TrelloActionBtn'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { sort } from './action'

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  }

  render() {
    const { lists } = this.props

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId='all-lists' direction='horizontal' type='list'>
          {(provided) => (
            <div
              className='container'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((item, index) => (
                <TrelloList
                  id={item.id}
                  title={item.title}
                  cards={item.cards}
                  key={item.id}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <div className='list-container'>
                <TrelloActionBtn list />
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    lists: state.list,
  }
}

export default connect(mapStateToProps)(App)
