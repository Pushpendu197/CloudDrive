import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function login() {

    const { data: session } = useSession()
    const router = useRouter();

    useEffect(() => {
        console.log('User Session');

        if (session) {
            router.push("/")
        }
    }, [session])

    return (
        <>
            <div className='flex justify-center'>
                <button type="button" className="btn btn-dark" onClick={() => signIn()}>Login</button>

            </div>

        </>
    )
}

export default login