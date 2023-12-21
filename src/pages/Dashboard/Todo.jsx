import useTasks from '../../hooks/useTasks';

const Todo = () => {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div>
      <h2> HELLO I Am Todo </h2>
    </div>
  );
};
export default Todo;
