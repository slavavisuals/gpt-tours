import MemberProfile from './MemberProfile';
import NavLinks from './NavLinks';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  return (
    <div className='grid grid-rows-[auto,1fr,auto] min-h-full px-4 py-12 w-80 bg-base-300'>
      {/* first row */}
      <SidebarHeader />
      {/* second row */}
      <NavLinks />
      {/* third row */}
      <MemberProfile />
    </div>
  );
};
export default Sidebar;
