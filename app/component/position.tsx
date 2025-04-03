import Image from "next/image";

export default function Position() {
  return (
    <div className="h-[100vh] relative bg-cyan-700">
      <Image
        src={"map.svg"}
        fill
        className="object-cover"
        alt="The Maris Vũng Tàu"
      />
      <div className="absolute w-[24vw] h-[85vh] top-1/2 left-5 -translate-y-1/2 rounded-md">
        <div className="m-10">
          <h1 className="text-2xl text-left mb-5 font-bold text-orange-200">
            VỊ TRÍ <br /> KIM CƯƠNG
          </h1>
          <Timeline />
        </div>
      </div>

      <Image
        src={"logo.svg"}
        width={200}
        height={200}
        className="absolute object-cover left-1/3 bottom-1/3"
        alt="The Maris Vũng Tàu"
      />
    </div>
  );
}

const timelineData = [
  {
    time: "The Maris Vũng Tàu",
    label: ["Đường 3/2", "Phường 10 & 11", "Thành phố Vũng Tàu"],
  },
  {
    time: "5 phút",
    label: ["Sân Golf Paradise", "TT hành chính mới VT", "Lotte Mart Vũng Tàu"],
  },
  {
    time: "10 phút",
    label: ["Tượng chúa Kitô Vua", "Bãi sau", "Cao tốc Biên Hoà - Vũng Tàu"],
  },
  {
    time: "15 phút",
    label: ["Ngọn hải đăng", "Bãi trước", "KDL Hồ Mây - Vũng Tàu"],
  },
  {
    time: "30 phút",
    label: ["Bến du thuyền Vũng Tàu Marina", "Dinh Cô - Long Hải"],
  },
  { time: "45 phút", label: [" Sân bay Quốc tế Long Thành"] },
  { time: "90 phút", label: ["Thành phố Hồ Chí Minh"] },
];

export function Timeline() {
  return (
    <div className="w-full">
      {timelineData.map((item, index) => (
        <div key={index} className="flex pb-10 h-27">
          {/* Time */}
          <span className="text-right text-sm font-bold w-16 flex-2 text-orange-100">
            {item.time}
          </span>
          {/* Timeline dot and line */}
          <div className="flex flex-col items-center flex-1 relative">
            <div className="absolute top-1 w-3 h-3 bg-cyan-100 rounded-full"></div>
            {index !== timelineData.length - 1 && (
              <div className="absolute top-3 w-px h-27 bg-orange-200 -z-1"></div>
            )}
          </div>
          {/* Label */}
          <span className="indent-0 ml-2 flex-5 text-left text-sm text-white">
            {item.label.map((label, i) => (
              <span key={i} className="block pb-1">
                • {label}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
