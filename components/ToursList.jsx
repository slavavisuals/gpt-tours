import TourCard from './TourCard';
const ToursList = ({ data }) => {
  if (data.length === 0) return <h4 className='text-lg'>No tours found...</h4>;

  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-5xl'>
      {data.map((tour) => {
        return <TourCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
};
export default ToursList;
