import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='min-h-screen hero bg-base-200'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>GPTGenius </h1>
          <p className='py-6 text-lg leading-loose'>
            GPTGenius: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
