import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <SignIn />
    </div>
  );
};
export default SignInPage;
