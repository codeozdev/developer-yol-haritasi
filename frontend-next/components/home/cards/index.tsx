import { LayoutGrid } from "@/components/ui/layout-grid";
import Link from "next/link";

export default function CardsComponent() {
  const cards = [
    {
      id: 1,
      content: (
        <div>
          <h2 className="font-bold text-2xl text-white mb-2">Web Developer</h2>
          <p className="text-sm text-neutral-200">
            Modern web teknolojileri, frontend ve backend geliştirme, responsive tasarım ve daha
            fazlası.
          </p>
          <Link
            href="/web-dev"
            className="bg-white/10 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-white/20 transition-colors">
            Keşfet →
          </Link>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/web.jpg",
    },
    {
      id: 2,
      content: (
        <div>
          <h2 className="font-bold text-2xl text-white mb-2">AI Developer</h2>
          <p className="text-sm text-neutral-200">
            Yapay zeka, makine öğrenmesi, derin öğrenme ve veri bilimi alanındaki en son gelişmeler.
          </p>
          <Link
            href="/ai-dev"
            className="bg-white/10 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-white/20 transition-colors">
            Keşfet →
          </Link>
        </div>
      ),
      className: "md:col-span-1",
      thumbnail: "/ai.jpg",
    },
    {
      id: 3,
      content: (
        <div>
          <h2 className="font-bold text-2xl text-white mb-2">Mobile Developer</h2>
          <p className="text-sm text-neutral-200">
            iOS, Android, cross-platform geliştirme ve modern mobil uygulama teknolojileri.
          </p>
          <Link
            href="/mobile-dev"
            className="bg-white/10 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-white/20 transition-colors">
            Keşfet →
          </Link>
        </div>
      ),
      className: "md:col-span-1",
      thumbnail: "/mobile.png",
    },
    {
      id: 4,
      content: (
        <div>
          <h2 className="font-bold text-2xl text-white mb-2">Game Developer</h2>
          <p className="text-sm text-neutral-200">
            Oyun geliştirme, 3D grafik, yapay zeka ve oyun motorları hakkında bilgi alın.
          </p>
          <Link
            href="/game-dev"
            className="bg-white/10 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-white/20 transition-colors">
            Keşfet →
          </Link>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/game.webp",
    },
    {
      id: 5,
      content: (
        <div>
          <h2 className="font-bold text-2xl text-white mb-2">Gömülü Sistemler</h2>
          <p className="text-sm text-neutral-200">
            Mikrodenetleyiciler, IoT, sensörler ve gerçek zamanlı sistemler üzerine geliştirme.
          </p>
          <Link
            href="/embedded-dev"
            className="bg-white/10 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-white/20 transition-colors">
            Keşfet →
          </Link>
        </div>
      ),
      className: "md:col-span-1",
      thumbnail: "/embedded.jpg",
    },
    {
      id: 6,
      content: (
        <div>
          <h2 className="font-bold text-2xl text-white mb-2">Siber Güvenlik</h2>
          <p className="text-sm text-neutral-200">
            Etik hacking, güvenlik testleri, ağ güvenliği ve siber tehdit analizi.
          </p>
          <Link
            href="/cyber-security"
            className="bg-white/10 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-white/20 transition-colors">
            Keşfet →
          </Link>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/cyber.jpg",
    },
  ];

  return (
    <div className="h-screen">
      <LayoutGrid cards={cards} />
    </div>
  );
}
