'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TourInfo from './TourInfo';
import {
  getExistingTour,
  generateTourResponse,
  createNewTour,
  fetchUserTokensById,
  subtractTokens,
} from '@/utils/actions';
import toast from 'react-hot-toast';
import { useAuth } from '@clerk/nextjs';

const NewTour = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination);
      if (existingTour) return existingTour;

      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 300) {
        toast.error('Token balance too low');
        return;
      }

      const newTour = await generateTourResponse(destination);

      if (!newTour) {
        toast.error('No matching city found...');
        return null;
      }

      const response = await createNewTour(newTour.tour);
      queryClient.invalidateQueries({ queryKey: ['tours'] });
      const newTokens = await subtractTokens(userId, newTour.tokens);
      toast.success(`${newTokens} tokens remaining...`);
      return newTour.tour;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if (isPending) {
    return <span className='loading loading-lg'></span>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='max-w-3xl'>
        <h2 className='mb-4 text-2xl'>Plan Your Next Adventure!</h2>
        <div className='flex flex-col gap-1 mb-4'>
          <p>
            Enter your dream destination: <strong>city</strong> and{' '}
            <strong>country</strong> and let us craft a personalized tour just
            for you.
          </p>
          <p>
            Click <strong>generate tour</strong> to start building unforgettable
            memories.
          </p>
          <p>Your journey begins here!</p>
        </div>

        <div className='w-full join'>
          <input
            type='text'
            className='w-full input input-bordered join-item'
            placeholder='city'
            name='city'
            required
          />
          <input
            type='text'
            className='w-full input input-bordered join-item'
            placeholder='country'
            name='country'
            required
          />
          <button className='btn btn-primary join-item' type='submit'>
            generate tour
          </button>
        </div>
      </form>
      <div className='mt-16'>{tour ? <TourInfo tour={tour} /> : null}</div>
    </>
  );
};
export default NewTour;
