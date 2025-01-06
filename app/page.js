import Link from 'next/link';
import CompassLogo from '@/assets/compass-logo.svg';
const HomePage = () => {
  return (
    <div className='min-h-screen hero bg-base-200'>
      <div className='text-center hero-content'>
        <div className='max-w-xl'>
          <div className='flex flex-col items-center'>
            <CompassLogo className='size-16' />
            <span className='mt-3 text-xl antialiased font-bold uppercase text-md'>
              smart voyage
            </span>
            <span className='text-xs'>personal travel advisor</span>
          </div>
          <p className='py-6 text-lg leading-loose'>
            Powered by OpenAI, it plans your trips, finds the best options, and
            takes the hassle out of travel. Adventure made easy!
          </p>
          <Link href='/tours/new-tour' className='btn btn-primary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
