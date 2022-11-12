import { useState } from "react";
import { useLocation } from "react-router-dom";
import Assets from "../assets";
import { ElementProps } from "../interfaces";

const Header = ({ page }: ElementProps) => {
  const pathName = useLocation().pathname;
  const cPage =
    pathName && pathName !== "/"
      ? pathName.substring(1, pathName.length)
      : "monitoring";

  const hrefs =
    page === "Landing"
      ? [
          {
            title: "About us",
            href: "#about-us",
          },
          {
            title: "Pricing",
            href: "#pricing",
          },
          {
            title: "Guide",
            href: " ",
          },
        ]
      : [
          {
            title: "Monitoring",
            href: "/monitoring",
          },
          {
            title: "Settings",
            href: "/settings",
          },
          {
            title: "Guide",
            href: " ",
          },
        ];

  const [showNav, setShowNav] = useState(false);
  return (
    <div
      className={`fixed flex flex-col w-screen bg-[#F0F0F0] pb-[20px] pt-[40px] px-[75px] lg:px-[125px] z-[999]`}
    >
      <div
        className={`flex items-center ${
          page === "Landing" && "justify-between"
        } justify-between lg:justify-start`}
      >
        <a href="/" className="cursor-pointer">
          <Assets.Logo />
        </a>

        {page !== "Register" && (
          <div
            style={{
              marginLeft: page === "Landing" ? "auto" : "75px",
            }}
            className="hidden lg:flex items-center gap-[45px] px-[10px] whitespace-nowrap"
          >
            {hrefs.map((href) => {
              const isCurrent = cPage === href.title.toLocaleLowerCase();

              return (
                <a href={href.href} className="cursor-pointer">
                  <span
                    className={`font-semibold text-[18px] ${
                      isCurrent ? "text-[#2E6AFF]" : "text-[#032853]/[.75]"
                    } cursor-pointer`}
                  >
                    {href.title}
                  </span>
                </a>
              );
            })}
          </div>
        )}

        <div className="hidden lg:flex items-center gap-[40px] ml-auto">
          {page === "Landing" ? (
            <a href="/login">
              <span className="font-semibold text-[18px] text-[#032853] cursor-pointer">
                Login
              </span>
            </a>
          ) : page !== "Register" ? (
            <div className="flex gap-[20px] items-center">
              <div className="w-[47.5px] h-[47.5px] border-[2px] border-[#CCCCCC] rounded-full">
                <img className="w-full h-full" src="" alt="" />
              </div>

              <span className="font-semibold text-[#7A8CA1] text-[18px]">
                username#0001
              </span>
            </div>
          ) : null}

          <a href={page === "Landing" ? "/register" : "/"}>
            <button className="w-[140px] h-[47.5px] rounded-[5px] bg-[#032853] font-semibold text-[16px] text-white">
              {page === "Landing"
                ? "Try for Free"
                : page === "Register"
                ? "Return"
                : "Sign Out"}
            </button>
          </a>
        </div>

        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          className="lg:hidden cursor-pointer stroke-[#032853]/[.75] justify-self-end"
          onClick={() => setShowNav(!showNav)}
        >
          <path
            d="M1 1H17"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 14.7143H17"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 7.85715H17"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div
        className={`${
          !showNav
            ? "h-[0px]"
            : `${page === "Landing" ? "h-[220.5px]" : "h-[241px]"}`
        } lg:hidden flex flex-col w-full mt-[20px] gap-[10px] items-center text-center transition-all duration-[300px] ease-linear overflow-hidden`}
      >
        {page !== "Register" && (
          <div className="flex flex-col gap-[10px] whitespace-nowrap">
            {hrefs.map((href) => {
              const isCurrent = cPage === href.title.toLocaleLowerCase();

              return (
                <a href={href.href} className="cursor-pointer">
                  <span
                    className={`font-semibold text-[18px] ${
                      isCurrent ? "text-[#2E6AFF]" : "text-[#032853]/[.75]"
                    } cursor-pointer`}
                  >
                    {href.title}
                  </span>
                </a>
              );
            })}
          </div>
        )}

        <div className="flex flex-col gap-[10px] items-center">
          {page === "Landing" ? (
            <a href="/login">
              <span className="font-semibold text-[18px] text-[#032853] cursor-pointer">
                Login
              </span>
            </a>
          ) : page !== "Register" ? (
            <div className="flex gap-[20px] items-center">
              <div className="w-[47.5px] h-[47.5px] border-[2px] border-[#CCCCCC] rounded-full">
                <img className="w-full h-full" src="" alt="" />
              </div>

              <span className="font-semibold text-[#7A8CA1] text-[18px]">
                username#0001
              </span>
            </div>
          ) : null}

          <a href={page === "Landing" ? "/register" : "/"}>
            <button className="w-[140px] h-[47.5px] rounded-[5px] bg-[#032853] font-semibold text-[16px] text-white">
              {page === "Landing"
                ? "Try for Free"
                : page === "Register"
                ? "Return"
                : "Sign Out"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
