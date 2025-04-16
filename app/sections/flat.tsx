import Image from "next/image";

export default function Flat() {
  return (
    <div className="h-[100vh] bg-cyan-700 relative flex flex-col items-center align-middle p-10">
      <h1 className="mt-10 mb-10 font-bold text-3xl text-white">
        MẶT BẰNG THIẾT KẾ
      </h1>
      <div className="h-[472px] w-[840px] relative z-0">
        <Image
          alt="Mặt bằng thiết kế của The Maris Vũng Tàu"
          src="/flat.jpg"
          fill
          className="absolute object-cover rounded-xl"
        />
      </div>
      <div className="text-white mt-5 mx-60 text-justify">
        <p className="p-2 pb-3">
          Mặt bằng The Maris Vũng Tàu có tất cả các loại hình Căn hộ cao cấp,
          Biệt thự, Căn hộ dịch vụ, Shophouse. .. cùng với rất nhiều sự lựa chọn
          theo từng phân khúc. Dù bạn lựa chọn phân khúc nào, The Maris cũng cam
          kết về chất lượng và đẳng cấp cho mỗi căn đến từng chi tiết Tổng thể
          dự án được phân làm{" "}
          <span className="text-orange-200 font-bold">3 khu chính</span> :
        </p>
        <p className="px-2 py-1">
          <span className="text-orange-200 font-bold">
            - Khu Biệt thự Serenity Villa
          </span>
          : gồm 3 phân khu: Phân khu Grand Seaside Villa với 123 căn. Phân khu
          Grand Ocean Villa với 43 căn. Phân khu Golf Villa Combound với 25 căn.
        </p>
        <p className="px-2 py-1">
          <span className="text-orange-200 font-bold">- Căn hộ du lịch</span>: 3
          tháp – 1 tháp VEGA ALARIC, 1 tháp VEGA ATLANTIC và 1 tháp POLARIS cao
          từ 15-18 tầng. Gồm 1679 căn hộ du lịch
        </p>
        <p className="px-2 py-1">
          <span className="text-orange-200 font-bold">
            - Khu khách sạn CAPELLA
          </span>{" "}
          1 khu 21 tầng. Gồm 932 phòng Khách Sạn và căn hộ Khách sạn
        </p>
      </div>
    </div>
  );
}
