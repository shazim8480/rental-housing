import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({
  modalVisible,
  setModalVisible,
  title,
  bodyText,
  onBtnClick,
}: any) {
  return (
    <>
      <Transition appear show={modalVisible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setModalVisible(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="my-6">
                    <p className="text-sm text-gray-500">{bodyText}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-end px-4 py-2 text-sm font-medium bg-green-700 border border-transparent rounded-md text-green-50 hover:bg-green-800 "
                      onClick={onBtnClick}
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-end px-4 py-2 ml-3 text-sm font-medium bg-red-700 border border-transparent rounded-md text-red-50 hover:bg-red-800 "
                      onClick={() => setModalVisible(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
