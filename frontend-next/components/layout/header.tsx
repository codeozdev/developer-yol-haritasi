import { MobileMenu } from "@/components/layout/mobile-menu";
import Link from "next/link";
import { NavbarMenu } from "../ui/navbar-menu";
import DarkThemeBtn from "./dark-theme-btn";

export default function Header() {
  const menuItems = {
    "Web Developer": {
      path: "/web-dev",
      subItems: {
        Frontend: {
          path: "/web-dev/frontend",
          subItems: {
            "Component Tabanlı": "/web-dev/frontend/component-tabanli",
            "MVC Tabanlı": "/web-dev/frontend/mvc-tabanli",
            CSS: "/web-dev/frontend/css",
          },
        },
        Backend: {
          path: "/web-dev/backend",
          subItems: {
            // Backend alt menüleri eklenecek
          },
        },
      },
    },
    // Hobby: {
    //   path: "/hobby",
    //   subItems: {
    //     Yazılım: "/hobby/yazilim",
    //     Oyun: "/hobby/oyun",
    //     Spor: "/hobby/spor",
    //   },
    // },
  };

  return (
    <header className="w-full bg-white  dark:bg-[#0d1117] shadow-sm">
      <nav className="container mx-auto px-4">
        <ul className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">
              Ana Sayfa
            </Link>
            <Link
              href="/yazilim-tarihi"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium text-[13px]">
              Yazlım Tarihi
            </Link>

            <div className="hidden md:flex items-center gap-4">
              <NavbarMenu items={menuItems} />
            </div>
            <DarkThemeBtn />
          </div>

          <MobileMenu items={menuItems} />
        </ul>
      </nav>
    </header>
  );
}
