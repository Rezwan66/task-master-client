import { Draggable } from 'react-beautiful-dnd';
import { TiDelete } from 'react-icons/ti';
import styled from 'styled-components';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 4px 4px 4px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TextContent = styled.div``;

// const Icons = styled.div`
//   display: flex;
//   justify-content: end;
//   padding: 2px;
// `;
function bgcolorChange(props) {
  return props.isDragging
    ? 'lightgreen'
    : props.isDraggable
    ? props.isBacklog
      ? '#F2D7D5'
      : '#DCDCDC'
    : props.isBacklog
    ? '#F2D7D5'
    : '#EAF4FC';
}

const Task = ({ task, index, refetch }) => {
  const axiosPublic = useAxiosPublic();

  const handleDelete = () => {
    console.log(task?._id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/tasks/${task?._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'The task has been removed.',
                icon: 'success',
              });
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
      }
    });
  };

  return (
    <Draggable draggableId={`${task._id}`} key={task._id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {/* <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}>
            <span>
              <small>
                #{task._id}
                {'  '}
              </small>
            </span>
          </div> */}
          <div>
            <div className="flex justify-between">
              <h1 className="text-xl font-bold tracking-widest">
                {task.title}
              </h1>
              <button onClick={handleDelete} className="">
                <TiDelete className="text-2xl text-red-500" />
              </button>
            </div>
            <i>{task.description}</i>
            <div className="flex items-center justify-between text-xs mt-2">
              <TextContent>
                <strong>Priority:</strong> {task.priority}
              </TextContent>
              <TextContent>
                <strong>Due on:</strong> {task.deadline}
              </TextContent>
            </div>
          </div>
          {/* <Icons>
            <div>
              <Avatar
                onClick={() => console.log(task)}
                src={"https://joesch.moe/api/v1/random?key=" + task.id}
              />
            </div>
          </Icons> */}
          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
