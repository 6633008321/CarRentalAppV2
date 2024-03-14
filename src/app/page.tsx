import Image from "next/image";
import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard";
import CarPanel from "@/components/CarPanel";

export default function Home() {
  return (
    <main >
      <div>
        <Banner/>
        <CarPanel/>
        
      </div>
    </main>
  );
}
