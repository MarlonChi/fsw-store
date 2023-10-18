import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
    <Image
      src="/assets/banner-01.svg"
      alt="Até 55% de desconto só esse mês!"
      height={0}
      width={0}
      className="h-auto w-full img" />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  )

}
