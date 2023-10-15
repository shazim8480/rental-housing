import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

interface DropdownProps {
  items: { value: string | number }[];
  selectedValue: { value: string | number };
  setSelectedValue: (selected: { value: string }) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <Listbox value={selectedValue} onChange={setSelectedValue}>
      <div className="relative ">
        <Listbox.Button className="relative w-48 cursor-default font-semibold bg-indigo-100  text-indigo-800 rounded-md py-2 pl-3 pr-10 text-left border-2 border-indigo-400 sm:text-sm">
          <span className="block ">{selectedValue?.value}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {items?.map((item, itemIdx) => (
              <Listbox.Option
                key={itemIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block  ${
                        selected ? "font-medium " : "font-normal"
                      }`}
                    >
                      {item?.value}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Dropdown;
