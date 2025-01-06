import TourInfo from '@/components/TourInfo';
import { getSingleTour } from '@/utils/actions';
import { generateTourImage } from '@/utils/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const SingleTourPage = async ({ params }) => {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect('/tours');
  }
  const { data } = await axios(`${url}${tour.city}`);
  const tourImage = data?.results[0]?.urls?.raw;

  // Open API Image Generation (extra $$$ COST $$$)
  //   const tourImage = await generateTourImage({
  //     city: tour.city,
  //     country: tour.country,
  //   });

  return (
    <div>
      <Link href='/tours' className='mb-12 btn btn-primary'>
        back to tours
      </Link>
      {tourImage ? (
        <div>
          <Image
            src={tourImage}
            width={300}
            height={300}
            className='object-cover mb-16 w-96 h-96 rounded-xl shadow-xl'
            alt={tour.title}
            priority
          />
        </div>
      ) : null}
      <TourInfo tour={tour} />
    </div>
  );
};
export default SingleTourPage;
