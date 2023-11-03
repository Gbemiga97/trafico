import { Link } from "react-scroll";
import { data } from "../constants";

const NavMobile = ({setShowNav}) => {
  return (
    <nav className='bg-accent w-full p-4'>
      <ul className="flex flex-col gap-y-6">
        {
          data.navData.map(({name, href}, i) => (
            <li
            key={i}>
              <Link
               onClick={() => setShowNav(false)}
              className="text-white hover:text-accent"
              spy={true}
              to={href}>{name}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default NavMobile;
