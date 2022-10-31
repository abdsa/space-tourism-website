import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface INavProps {}

const navItemsData = [
  ["00", "Home", "/"],
  ["01", "Destination", "/destination"],
  ["02", "Crew", "/crew"],
  ["03", "Technology", "/technology"],
];

function NavItems() {
  const router = useRouter();

  return (
    <>
      <ul className="nav-links-bg hidden gap-16 place-self-end px-[6rem] pt-[2rem] font-barlowC tablet:flex">
        {navItemsData.map((item) => {
          return (
            <Link href={item[2]} key={item[0]}>
              <li
                className={`${
                  router.pathname === item[2]
                    ? "border-b-[3px] border-white"
                    : "border-transparent border-b-[3px] hover:border-b-[3px] hover:border-[rgb(255,255,255,0.5)]"
                } grid cursor-pointer select-none grid-flow-col gap-6 pb-[2rem] text-navText font-light uppercase text-white transition-[border-bottom] duration-150`}
              >
                <span aria-hidden="true" className="navLinkNumber hidden font-bold tracking-navText desktop:block">
                  {item[0]}
                </span>
                <span className=" tracking-navText">{item[1]}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  return (
    <>
      <NavItems />
    </>
  );
};

export default Nav;
