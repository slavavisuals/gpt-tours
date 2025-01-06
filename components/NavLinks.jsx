import Link from 'next/link';

const links = [
  { href: '/tours/new-tour', label: 'new tour' },
  { href: '/tours', label: 'collection' },
  { href: '/chat', label: 'assistant' },
  { href: '/profile', label: 'profile' },
];

const NavLinks = () => {
  return (
    <ul className='flex flex-col justify-start justify-self-center menu text-base-content'>
      {links.map((link) => {
        return (
          <li className='my-1' key={link.href}>
            <Link href={link.href} className='capitalize'>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
