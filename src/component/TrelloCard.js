import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function TrelloCard({ text, id, index }) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          className='list-cards'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='list-card'>{text}</div>
        </div>
      )}
    </Draggable>
  )
}

export default TrelloCard
