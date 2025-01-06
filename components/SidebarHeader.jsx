import CompassLogo from '@/assets/compass-logo.svg';

const SidebarHeader = () => {
  return (
    <div className='flex flex-col gap-8 px-4 mb-4'>
      <div className='flex flex-col items-center'>
        <CompassLogo className='size-16' />
        <span className='mt-3 text-lg antialiased font-bold uppercase text-md'>
          smart voyage
        </span>
        <span className='text-xs'>personal travel advisor</span>
      </div>
    </div>
  );
};
export default SidebarHeader;
