import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from "../../styles/Todo.module.scss";
import { selectTasks, updateAllTaskOrder  } from "../../redux/slice/todolistSlice";
import Task from "./Task";

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  

const Tasks = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleRenderTask = () => {
    if (tasks.length === 0) {
      return <div>There are no task left</div>;
    }
    
    const onDragEnd = (result) => {
      if (!result.destination) {
        return;
      }

      const items = reorder(
        tasks,
        result.source.index,
        result.destination.index
      );

      dispatch(updateAllTaskOrder(items))
    };

    const onDragStart = (result) => {
      console.log("hello start", result);
    };

    const getItemStyle = (isDragging, draggableStyle) => ({
      // some basic styles to make the items look a bit nicer
      userSelect: "none",

      // change background colour if dragging
      background: isDragging ? "lightgreen" : "",

      // styles we need to apply on draggables
      ...draggableStyle,
    });

    const getListStyle = (isDraggingOver) => ({
      background: isDraggingOver ? "lightblue" : "",
    });

    return (
      <>
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {tasks.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Task item={item} key={item.id} dispatch={dispatch} />
                      </div>
                    )}
                  </Draggable>
                ))}
                  {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  };
  return <div className={styles.listTask}>{handleRenderTask()}</div>;
};

export default Tasks;
