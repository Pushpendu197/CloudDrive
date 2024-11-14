import Image from 'next/image'
import React from 'react'

function FolderItem({ folder }) {
    return (
        <>
            <div className='w-full flex justify-center items-center flex-col h-[100px] border-[1px] m-2 rounded-lg cursor-pointer hover:scale-105 hover:shadow-md'>
                <Image src='/folder.png' alt='folder' width={40} height={40} />

                <h4 className='text-[14px] mt-2'>{folder.name}</h4>
            </div>
        </>
    )
}

export default FolderItem