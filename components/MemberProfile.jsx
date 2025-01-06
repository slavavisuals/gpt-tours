import { fetchOrGenerateTokens } from '@/utils/actions';
import { UserButton, auth, currentUser } from '@clerk/nextjs';
import ThemeToggle from './ThemeToggle';

const MemberProfile = async () => {
  const user = await currentUser();
  const { userId } = auth();
  await fetchOrGenerateTokens(userId);

  return (
    <aside className='flex gap-1 justify-between items-center max-w-sm'>
      <div className='flex overflow-hidden gap-1 items-center'>
        <UserButton afterSignOutUrl='/' />
        <p className='text-sm truncate text-base-content max-w-48'>
          {user.emailAddresses[0].emailAddress}
        </p>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </aside>
  );
};
export default MemberProfile;
