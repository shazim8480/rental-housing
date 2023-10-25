"use client";
import React from "react";
// import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { useAppSelector } from "@/redux/hooks";

const profileOptions = [
  {
    name: "Dashboard",
    description: "Get a better understanding of your profile",
    href: "/dashboard",
    icon: ChartPieIcon,
  },
  {
    name: "Profile",
    description: "Speak directly to your customers",
    href: "#",
  },
  {
    name: "Privacy Policy",
    description: "Your customers’ data will be safe and secure",
    href: "#",
  },
  {
    name: "Log out",
    description: "Build strategic funnels that will convert",
    href: "#",
  },
];

function classNames(
  ...classes: Array<string | boolean | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC<{ isSearchBar?: React.ReactNode }> = ({
  isSearchBar,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const userData = useAppSelector((state: any) => state.user);

  // console.log("user info", userData);

  return (
    <header className="bg-indigo-100">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-gray-800 font-bold">
            Rental
            <span className="pl-1 font-medium text-indigo-600 text-mono">
              {" "}
              Housing
            </span>
          </Link>

          {/* search bar */}
          {isSearchBar ? (
            <div className="hidden mx-auto text-gray-600 lg:flex lg:justify-start lg:items-center">
              <input
                className="h-10 px-5 text-sm bg-white border-gray-300 rounded-lg border-1 w-72 focus:outline-none"
                type="search"
                name="search"
                placeholder="Enter Location or Property Name"
              />
              <button
                type="submit"
                className="px-3 py-2 ml-4 bg-indigo-600 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
        {/* mobile menu onclick */}
        <div className="flex lg:hidden xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
          <Link
            href="/about-us"
            className="px-4 py-1 text-sm font-semibold leading-6 text-gray-900 rounded hover:bg-gray-100"
          >
            About Us
          </Link>
          <Link
            href="/property-listings"
            className="px-4 py-1 text-sm font-semibold leading-6 text-gray-900 rounded hover:bg-gray-100"
          >
            Property Listings
          </Link>
          <Link
            href="/seller"
            className="px-4 py-1 text-sm font-semibold leading-6 text-gray-900 rounded hover:bg-gray-100"
          >
            List Your Property
          </Link>
        </div>

        <button className="hidden px-4 py-1 mr-8 text-sm font-semibold leading-6 text-center bg-indigo-600 rounded lg:block hover:bg-indigo-800 text-indigo-50">
          <Link href="/login">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </button>
        {/* profile popover */}
        <Popover.Group className="hidden lg:flex lg:gap-x-2 lg:mr-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
              Hi, Adnan
              <ChevronDownIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-xs mt-3 overflow-hidden bg-white shadow-lg -right-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                <div className="p-2">
                  {profileOptions.map((item) => (
                    <div
                      key={item.name}
                      className="relative flex items-center p-4 text-sm leading-3 rounded-md group gap-x-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
      {/* mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Hi, Adnan
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180 h-5 w-5" : "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-1">
                        {...profileOptions.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 bg-indigo-600 rounded-md text-indigo-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
