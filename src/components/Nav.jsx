import { data } from "../constants";

const Nav = ({header}) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-[96px]">
        {
          data.navData.map(({name, href}, i) => (
            <li key={i}>
              <a 
              className={`${header ? 'text-primary' : 'text-white'}
              cursor-pointer hover:text-accent-hover transition`}
              href={href}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Nav;
