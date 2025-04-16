import Carousel from "../components/Carousel";

const images = [
  "/beach.PNG",
  "/gateway.PNG",
  "/hotel5star.PNG",
  "/dock.PNG",
  "/park.PNG",
  "/pool.PNG",
  "/restaurant.PNG",
  "/golf.PNG",
  "/diving.PNG",
  "/pickeball.PNG",
  "/garden.PNG",
];

export default function Utilities() {
  return (
    <div className="h-[100vh] flex flex-col items-center align-middle">
      <h1 className="mt-20 mb-10 text-4xl font-bold text-cyan-700">
        Chuỗi tiện ích đa dạng
      </h1>
      <Carousel images={images} className="h-[720px] w-[1270px] rounded-3xl" />
    </div>
  );
}
