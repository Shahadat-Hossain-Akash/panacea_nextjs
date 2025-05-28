'use client'

import {Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild} from '@headlessui/react'
import {X} from 'lucide-react'

export default function Drawer({
                                   isOpen,
                                   onClose,
                                   title = 'Drawer',
                                   children,
                               }) {

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-white bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="bg-white flex flex-col pointer-events-auto relative w-screen max-w-sm transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <TransitionChild>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="absolute text-sm top-4 right-4 rounded-md px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0 focus:ring-none"
                                >
                                    <X/>
                                </button>
                            </TransitionChild>

                            <div
                                className="flex h-full flex-col overflow-y-scroll scrollbar-none shadow-xl pt-12">
                                {title && (
                                    <div className="px-3 py-1">
                                        <DialogTitle
                                            className="text-2xl leading-6 text-gray-900">{title}</DialogTitle>
                                    </div>
                                )}
                                <div className="relative my-2 flex-1 px-2">{children}</div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
