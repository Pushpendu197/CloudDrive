import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faFolderPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Menu from '@/data/Menu'
import CreateFolderModal from './Folder/CreateFolderModal'
import Image from 'next/image'

function SideNavbar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true)
    }

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <div className='w-[270px] bg-white h-screen sticky top-0 z-10 shadow-md p-4'>
                <div className='flex justify-center items-center'>
                    {/* Add image/logo if necessary */}
                    <Image src='/logo3.png' alt='logo' width={180} height={0} />
                </div>

                <div>
                    <button
                        onClick={openModal}
                        className="btn btn-info flex items-center gap-2 text-white mt-5 w-full p-2"
                    >
                        Add New Folder <FontAwesomeIcon icon={faFolderPlus} />
                    </button>

                    <button className="btn btn-info flex gap-2 items-center text-white mt-3 w-full p-2">
                        Add New File <FontAwesomeIcon icon={faFileCirclePlus} />
                    </button>
                </div>

                <div className='mt-4'>
                    {Menu.list.map((item, index) => (
                        <div key={index}>
                            <h2
                                onClick={() => setActiveIndex(index)}
                                className={`flex items-center gap-2 text-base p-2 px-3 mt-3 text-gray-500 hover:bg-blue-100 cursor-pointer rounded-md ${activeIndex === index ? 'bg-blue-100' : ''}`}
                            >
                                {item.name}
                            </h2>
                        </div>
                    ))}
                </div>
                <div className='text-sm text-gray-400 mt-72 text-center'>
                    <span>© Pushpendu Dey</span>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <CreateFolderModal closeModal={closeModal} />
            )}
        </div>
    )
}

export default SideNavbar
