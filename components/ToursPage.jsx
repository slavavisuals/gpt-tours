'use client';

import { getAllTours } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import ToursList from './ToursList';
import { useState } from 'react';

const ToursPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data, isPending } = useQuery({
    queryKey: ['tours', searchValue],
    queryFn: () => getAllTours(searchValue),
  });

  return (
    <>
      <form className='mb-14 max-w-3xl'>
        <h2 className='mb-4 text-2xl'>Your Personalized Travel Collection</h2>
        <div className='flex flex-col gap-1 mb-4'>
          <p>Discover all the amazing tours you've created!</p>
          <p>
            This is your go-to hub for revisiting, editing, or exploring your
            personalized travel plans.
          </p>
          <p>
            Each tour is tailored just for you—ready whenever you are to embark
            on your next adventure!
          </p>
        </div>
        <div className='w-full join'>
          <input
            type='text'
            placeholder='enter city or country here...'
            className='w-full input input-bordered join-item'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            className='btn btn-primary join-item lg:w-[200px]'
            type='button'
            disabled={isPending}
            onClick={() => setSearchValue('')}
          >
            {isPending ? 'please wait' : 'reset'}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className='loading'></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
};
export default ToursPage;
