import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.css'
import SideNavbar from "@/components/SideNavbar";
import Toast from "@/components/Toast";



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className="flex">
        <SideNavbar />

        {/* bigger */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">

          <div className="col-span-2">
            <Component {...pageProps} />
          </div>

          {/* smaller  */}
          <div className="bg-white p-3 shadow-md">
            Storages
          </div>
        </div>
        {/* <div>
          <CreateFolderModal />
        </div> */}
      </div>

      <Toast />
    </SessionProvider>
  )
}