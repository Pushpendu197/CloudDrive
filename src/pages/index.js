import FolderList from "@/components/Folder/FolderList";
import Searchnbar from "@/components/Searchnbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter();

  useEffect(() => {
    console.log('User Session');

    if (!session) {
      router.push("/login")
    }
    // else {
    //   console.log('User Session');

    // }
  }, [session])
  return (

    <>
      <div className="p-4">
        <Searchnbar />
        <FolderList />
      </div>

    </>
  );
}
