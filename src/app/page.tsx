import Image from "next/image";
import Navbar from "./components/navbar/page";
import Home1 from "./components/home/page";
import Shope from "./components/shope/page";
import Promo from "./components/promo/page";
import Analatic from "./components/analatic/page";
import Footer from "./components/footer/page";
import Blog from "./components/bloog/page";
import Status from "./components/status/page";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Home1 />
      <Shope />
      <Promo />
      <Analatic />
      <Blog />
      <Status />
      <Footer />
      
    </main>
  );
}
