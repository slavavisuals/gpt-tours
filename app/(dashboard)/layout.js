import { FaBarsStaggered } from 'react-icons/fa6';
import Sidebar from '@/components/sidebar';

const layout = ({ children }) => {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-2'
          className='fixed drawer-button lg:hidden top-6 right-6'
        >
          <FaBarsStaggered className='w-8 h-8 text-primary' />
        </label>
        <div className='min-h-screen px-8 py-12 bg-base-200'>{children}</div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};
export default layout;
