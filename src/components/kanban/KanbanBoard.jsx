// import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const KanbanBoard = ({ tasks, refetch }) => {
  //   const [completed, setCompleted] = useState([]);
  //   const [ongoing, setOngoing] = useState([]);
  //   const [incomplete, setIncomplete] = useState([]);
  const axiosPublic = useAxiosPublic();

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then(response => response.json())
  //       .then(json => {
  //         setCompleted(json.filter(task => task.completed));
  //         setIncomplete(json.filter(task => !task.completed));
  //       });
  //   }, []);

  const handleDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);
    if (!destination) return; // Dropping outside the droppable area

    if (source?.droppableId == destination?.droppableId) return;

    // Get the task from the tasks array
    // const task = tasks.find(task => task._id == draggableId);

    let category = '';
    if (destination?.droppableId == 1) {
      category = 'to-do';
    } else if (destination?.droppableId == 2) {
      category = 'ongoing';
    } else if (destination?.droppableId == 3) {
      category = 'completed';
    }

    // Check if there's only one task in the "TO DO" section
    // const isOnlyTaskInToDo =
    //   tasks.filter(task => task.category === 'to-do').length === 1;

    // If there's only one task in the "TO DO" section and the destination is null,
    // set the category to 'to-do' to handle the case
    // if (isOnlyTaskInToDo && destination.droppableId === null) {
    //   category = 'to-do';
    // }

    axiosPublic
      .patch(`/tasks/${draggableId}`, { category })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          toast('Task Updated Successfully!', {
            icon: '📢',
            style: {
              borderRadius: '8px',
              background: '#333',
              color: '#fff',
            },
          });
          refetch();
        }
      })
      .catch(err => {
        toast(err.message, {
          icon: '❌',
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        });
      });
  };

  //   function findItemById(id, array) {
  //     return array.find(item => item.id == id);
  //   }

  //   function removeItemById(id, array) {
  //     return array.filter(item => item.id != id);
  //   }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 className="text-center text-3xl font-bold my-4">MY TASK BOARD</h2>
      <p className="text-center italic mb-4 text-xs">
        ** Drag a task to the top of your desired category!
      </p>
      <div className="flex justify-between items-center md:flex-row flex-col">
        <Column
          title={'TO DO'}
          refetch={refetch}
          tasks={tasks.filter(task => task.category === 'to-do')}
          id={'1'}
        />
        <Column
          title={'ONGOING'}
          refetch={refetch}
          tasks={tasks.filter(task => task.category === 'ongoing')}
          id={'2'}
        />
        <Column
          title={'COMPLETED'}
          refetch={refetch}
          tasks={tasks.filter(task => task.category === 'completed')}
          id={'3'}
        />
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
