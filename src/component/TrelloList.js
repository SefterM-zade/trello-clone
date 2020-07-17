import React from 'react'
import TrelloCard from './TrelloCard'
import TrelloActionBtn from './TrelloActionBtn'
import { Droppable, Draggable } from 'react-beautiful-dnd'

function TrelloList({ title, cards, id, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className='list-container'
        >
          <Droppable droppableId={String(id)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <p className='list-header'>{title}</p>
                {cards.map((card, index) => (
                  <TrelloCard
                    text={card.text}
                    key={card.id}
                    id={card.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionBtn listId={id} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default TrelloList
