import React from 'react'
import FolderItem from './FolderItem'

function FolderList() {

    const folderList = [
        {
            id: 1,
            name: 'Folder1',
        },
        {
            id: 1,
            name: 'Folder1',
        },
        {
            id: 1,
            name: 'Folder1',
        },
        {
            id: 1,
            name: 'Folder1',
        },
        {
            id: 1,
            name: 'Folder1',
        },
    ]


    return (
        <div className='bg-white mt-3 rounded-lg'>
            <h4 className='text-[17px] font-medium mt-10 flex justify-between items-center font-semibold'>RECENT FOLDERS
                <span className='float-right text-[13px] cursor-pointer'>View All</span>
            </h4>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4'>
                {folderList.map((item) => (
                    <FolderItem folder={item} />
                ))}
            </div>
        </div>
    )
}

export default FolderList