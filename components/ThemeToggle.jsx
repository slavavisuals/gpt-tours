'use client';
import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  cmyk: 'cmyk',
  dim: 'dim',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.cmyk);

  const toggleTheme = () => {
    const newTheme = theme === themes.cmyk ? themes.dim : themes.cmyk;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline'>
      {theme === 'cmyk' ? (
        <BsMoonFill className='w-4 h-4' />
      ) : (
        <BsSunFill className='w-4 h-4' />
      )}
    </button>
  );
};
export default ThemeToggle;
