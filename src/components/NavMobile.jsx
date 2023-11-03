import { data } from "../constants";

const NavMobile = () => {
  return (
    <nav className='bg-accent w-full p-4'>
      <ul className="flex flex-col gap-y-6">
        {
          data.navData.map(({name, href}, i) => (
            <li key={i}>
              <a 
              className="text-white hover:text-accent"
              href={href}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default NavMobile;
