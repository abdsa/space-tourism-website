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
      <ul className="hidden nav-links-bg desktop:flex gap-16 place-self-end px-[6rem] pt-[3rem] font-barlowC">
        {navItemsData.map((item) => {
          return (
            <Link href={item[2]} key={item[0]}>
              <a>
                <li
                  className={`${
                    router.pathname === item[2]
                      ? "border-b-[3px] border-white"
                      : "border-[rgb(255,255,255,0.5)] hover:border-b-[3px]"
                  } grid cursor-pointer select-none grid-flow-col gap-6 pb-[3rem] text-navText font-light uppercase text-white transition-[border-width] duration-75`}
                >
                  <span className="navLinkNumber font-bold tracking-navText">
                    {item[0]}
                  </span>
                  <span className="tracking-navText">{item[1]}</span>
                </li>
              </a>
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
