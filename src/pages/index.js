import CarouselComponent from "@/components/home/Carousel";
import Card from "@/components/home/Card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
  <CarouselComponent/>
  <Card/>
  </>
}
