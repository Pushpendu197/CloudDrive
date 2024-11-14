import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { app } from '../../../Config/FirebaseConfig'
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from 'next-auth/react';

function CreateFolderModal({ closeModal }) {

    const [folderName, setFolderName] = useState();

    // const onCreate = () => {
    //     console.log(folderName);

    // }

    const docId = Date.now().toString();
    const { data: session } = useSession();

    const db = getFirestore(app)
    const onCreate = async () => {
        console.log(folderName);
        await setDoc(doc(db, "Folders", docId), {
            name: folderName,
            id: docId,
            createdBy: session.user.email
        })

    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg relative">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h2 className="text-xl font-semibold mb-4">Create New Folder</h2>
                <input
                    onChange={(e) => setFolderName(e.target.value)}
                    type="text"
                    placeholder="Folder Name"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <button
                    className="btn btn-primary w-full"
                    onClick={() => {
                        // Add functionality to handle folder creation
                        onCreate()
                    }}
                >
                    Create Folder
                </button>
            </div>
        </div>
    )
}

export default CreateFolderModal
