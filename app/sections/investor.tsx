import Image from "next/image";

export default function Investor() {
  return (
    <div className="h-[100vh] relative">
      <div className="absolute h-[60vh] w-[70vw] top-1/2 left-1/2 -translate-1/2 bg-sky-800 md:flex rounded-md p-2">
        <div className="relative flex-1">
          <Image
            src="/TDGGroup.jpg"
            fill
            className="object-left-bottom rounded-md object-cover"
            alt=""
          />
        </div>
        <div className="flex-1 flex items-center">
          <div className="m-5 text-blue-50">
            <h1 className="text-2xl text-center">
              Dự án được đầu tư bởi: TDG Group
            </h1>
            <br />
            <br />
            <p className="text-center">
              <span className="text-amber-300 font-bold ">TDG Group</span> là
              một công ty đầu tư, quản lý và phát triển bất động sản hàng đầu
              tại tỉnh Bà Rịa - Vũng Tàu, thủ phủ du lịch của miền Nam.
            </p>
            <br />
            <p className="indent-5">
              Được thành lập vào năm 2004, trải qua gần 20 năm liên tục phát
              triển, TDG Group chủ trương đầu tư phát triển các dự án bất động
              sản cao cấp dài hạn với danh mục đầu tư ngày càng tăng. Các công
              trình của TDG Group phát triển đều có quy hoạch chỉnh chu, hiện
              đại và được xem là các dự án kiểu mẫu của tỉnh Bà Rịa - Vũng Tàu.
              Tâm huyết của TDG Group là tạo nên những sản phẩm thu hút và
              truyền cảm hứng sống đầy khát vọng, khỏe mạnh và bền vững đến quý
              khách hàng, cư dân.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
