import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <ul className="flex items-center justify-start space-x-8 h-16">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/web-developer" className="text-gray-700 hover:text-gray-900 font-medium">
              Web Developer
            </Link>
          </li>
          <li>
            <Link href="/iletisim" className="text-gray-700 hover:text-gray-900 font-medium">
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
