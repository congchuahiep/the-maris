import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[100vh]">
      {/* BIG PICTURE SECTION */}
      <div className="h-[60vh] relative text-center">
        <div>
          <div className="absolute top-[24vh] left-1/2 -translate-1/2 z-1 text-green-50">
            <h1 className="text-5xl">The Maris Vũng Tàu</h1>
            <p className="">Trải nghiệm đẳng cấp</p>
          </div>

          <Image
            src="/demo2.jpg"
            fill
            className="brightness-50 -z-1 object-cover"
            alt="The Maris Vũng Tàu"
          />
        </div>
      </div>

      {/* DRAW CARD */}
      <div className="absolute mt-16 left-1/2 -translate-1/2 z-2 w-full">
        <CardSection />
      </div>
    </div>
  );
}

export function CardSection() {
  const cards = [
    {
      id: 1,
      title: "Vị trí “kim cương”",
      description:
        "The Maris Vũng Tàu tọa lạc ngay mặt tiền đường 3/2 - trục đường huyết mạch của thành Phố Vũng Tàu.",
      img: "/HeroCard1.PNG",
      class: "",
      tag: "Green Vibe",
    },
    {
      id: 2,
      title: "Thiết kế chuẩn châu Âu",
      description:
        "Phong cách kiến trúc kiểu Pháp: hiện đại, phóng khoáng, đa màu sắc.",
      img: "/HeroCard2.jpg",
      tag: "Green Vibe",
    },
    {
      id: 3,
      title: "Hệ tiện ích 5 sao đẳng cấp",
      description:
        "Hơn 100 tiện ích đa dạng: Một địa điểm hội tụ hàng loạt giá trị nâng tầm phát triển du lịch với tiện ích all-in-one.",
      img: "/HeroCard3.PNG",
      tag: "Green Vibe",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`
              relative bg-white shadow-lg rounded-sm overflow-hidden
              ${card.id % 2 === 1 && "top-10"}
              ${card.class}
            `}
          >
            {/* Image */}
            <div className="relative w-full h-80">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-left-bottom object-cover"
              />
              {/* Badge */}
              <span className="absolute top-2 left-2 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-md shadow">
                {card.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-sky-700">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
