import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface INavItemsProps {
  isMobileMenu: boolean;
}

interface INavProps {
  isMobileMenu: boolean;
}

const navItemsData = [
  ["00", "Home", "/"],
  ["01", "Destination", "/destination"],
  ["02", "Crew", "/crew"],
  ["03", "Technology", "/technology"],
];

function NavItems({ isMobileMenu }: INavItemsProps) {
  const router = useRouter();

  return (
    <>
      <ul
        className={`${
          isMobileMenu
            ? `flex flex-col gap-16 pl-[2rem] pt-[5rem]`
            : `nav-links-bg hidden gap-16 place-self-end px-[6rem] pt-[2rem] tablet:flex`
        } font-barlowC`}
      >
        {navItemsData.map((item) => {
          return (
            <Link
              href={item[2]}
              key={item[0]}
              className={` ${isMobileMenu ? `grid grid-cols-1` : `flex`} ${
                router.pathname === item[2]
                  ? `${
                      isMobileMenu ? `border-r-[4px]` : `border-b-[3px]`
                    } border-white`
                  : `${
                      isMobileMenu ? `border-r-[4px]` : `border-b-[3px]`
                    } border-transparent ${
                      isMobileMenu
                        ? `hover:border-r-[4px]`
                        : `hover:border-b-[3px]`
                    }  ${
                      isMobileMenu
                        ? `transition-[border-right]`
                        : `transition-[border-bottom]`
                    } hover:border-[rgb(255,255,255,0.5)]`
              }`}
            >
              <li
                className={`${
                  isMobileMenu ? `gap-3` : `desktop:gap-6`
                } grid cursor-pointer select-none grid-flow-col grid-cols-[min-content_min-content] ${
                  isMobileMenu ? `pb-0 pr-20` : `pb-8 pr-0`
                }  text-navText font-light uppercase text-white transition-[border-bottom] duration-150`}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    isMobileMenu ? `flex` : `hidden`
                  } navLinkNumber font-bold tracking-navText desktop:block`}
                >
                  {item[0]}
                </span>
                <span className="tracking-navText">{item[1]}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

const Nav: React.FunctionComponent<INavProps> = ({ isMobileMenu }) => {
  return (
    <>
      <NavItems isMobileMenu={isMobileMenu} />
    </>
  );
};

export default Nav;
