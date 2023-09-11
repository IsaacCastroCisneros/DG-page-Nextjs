import React,{Fragment, ReactNode} from 'react'
import { Dialog,Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';

export const MyPopUp = ({isOpen,setIsOpen,popUp,button}:{popUp:ReactNode,isOpen:boolean,setIsOpen:(e:any)=>void,button?:string}) => 
{
    return (
      <>
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            className="fixed inset-0 z-[9999999] overflow-y-auto"
            onClose={() => setIsOpen(false)}
          >
            <div className="min-h-screen px-[.8rem] flex items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100 bg-black opacity-[.8]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="relative rounded-[.5rem] overflow-hidden">
                  {popUp}
                  <button className={twMerge('absolute top-[1rem] right-[1rem] text-[#858484] hover:text-[#333]',button)} 
                   onClick={()=>setIsOpen(false)}
                   >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    );
}
