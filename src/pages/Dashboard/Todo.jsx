import Lottie from 'lottie-react';
import DashboardContainer from '../../components/DashboardContainer';
import KanbanBoard from '../../components/kanban/KanbanBoard';
import useTasks from '../../hooks/useTasks';
import loadAnim from '../../assets/animations/LoadingAnimation.json';

const Todo = () => {
  const { tasks, isPending, refetch } = useTasks();
  if (isPending) {
    return (
      <div className="flex items-center justify-center mt-20">
        <Lottie animationData={loadAnim} />
      </div>
    );
  }
  // console.log(tasks);
  return (
    <div>
      <DashboardContainer>
        <KanbanBoard tasks={tasks} refetch={refetch} />
      </DashboardContainer>
    </div>
  );
};
export default Todo;
