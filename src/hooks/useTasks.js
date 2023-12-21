import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTasks = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    data: tasks = [],
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ['tasks', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks?email=${user?.email}`);
      return res.data;
    },
  });

  return { tasks, isPending, error, refetch };
};

export default useTasks;
