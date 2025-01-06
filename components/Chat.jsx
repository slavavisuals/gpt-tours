'use client';

import {
  generateChatResponse,
  fetchUserTokensById,
  subtractTokens,
} from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '@clerk/nextjs';
const Chat = () => {
  const { userId } = useAuth();

  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 100) {
        toast.error('Token balance too low....');
        return;
      }

      const response = await generateChatResponse(messages);

      if (!response) {
        toast.error('Something went wrong...');
        return;
      }
      setMessages((prev) => [...prev, response.message]);
      const newTokens = await subtractTokens(userId, response.tokens);
      toast.success(`${newTokens} tokens remaining...`);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: 'user', content: text };
    setMessages((prev) => [...prev, query]);
    setText('');
    mutate();
  };

  return (
    <div className='min-h-[calc(100vh-6rem)] max-w-4xl grid grid-rows-[1fr,auto]'>
      <div>
        <h2 className='mb-4 text-2xl'>Meet Your Travel Assistant!</h2>
        <p>
          Ask anything about your next adventure - travel tips, destination
          insights, or itinerary suggestions. <br /> Your virtual assistant is
          here to help, anytime, anywhere!
        </p>
        {messages.map(({ role, content }, index) => {
          const avatar = role == 'user' ? '👤' : '🤖';
          const bcg = role === 'user' ? 'bg-base-200' : 'bg-base-100';
          return (
            <div
              key={index}
              className={`flex px-8 py-6 -mx-8 text-xl leading-loose border-b ${bcg} border-base-300`}
            >
              <span className='mr-4'>{avatar}</span>
              <p className='max-w-3xl'>{content}</p>
            </div>
          );
        })}
        {isPending ? <span className='loading'></span> : null}
      </div>
      <form onSubmit={handleSubmit} className='pt-12 max-w-4xl'>
        <div className='w-full join'>
          <input
            type='text'
            placeholder='What are the best travel destinations for the summer?'
            className='w-full input input-bordered join-item'
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className='btn btn-primary join-item'
            type='submit'
            disabled={isPending}
          >
            {isPending ? 'please wait...' : 'ask question'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Chat;
