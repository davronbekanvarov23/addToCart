import { IoReturnUpBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "About",
    path: "/about",
  },
  {
    id: 3,
    text: "Contact",
    path: "/contact",
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
