import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "./ui/SideNavbar";
import BottomNavigation from "./ui/BottomNavigation";
import TopBar from "./ui/TopBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=''>
          <SideNavbar />
          {/* <Sidebar /> */}

        </div>
        <div className="lg:ml-72">
          <TopBar />
          {children}
        </div>
        <BottomNavigation />
      </body>
    </html>
  );
}
