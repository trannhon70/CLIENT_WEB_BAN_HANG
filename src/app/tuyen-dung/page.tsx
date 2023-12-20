"use client";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const sliders = [
  {
    title: "LẤY KHÁCH HÀNG LÀ NIỀM CẢM HỨNG",
    content: (
      <div>
        Chúng tôi mong muốn mang đến cho Khách Hàng những TRẢI NGHIỆM TUYỆT VỜI
        NHẤT ở tất cả các khía cạnh, điều đó làm chúng tôi thấy được ý nghĩa
        công việc, niềm vui và nhiều cảm hứng
      </div>
    ),
  },
  {
    title: "TẦM NHÌN",
    content: (
      <div>
        ĐẾN 2027 “TRỞ THÀNH NHÀ BÁN HẢI SẢN THỊ TRƯỜNG NỘI ĐỊA HÀNG ĐẦU VIỆT
        NAM”
        <br />- TOP 01 Nhà Bán Lẻ Kết Hợp Online & Cửa Hàng
        <br />- TOP 03 Thị Phần Sản Phẩm Thuỷ Hải Sản Ở Kênh Phân Phối Bán Lẻ
        Hiện Đại
      </div>
    ),
  },
  {
    title: "SỨ MỆNH",
    content: (
      <div>
        Mang đến sản phẩm TƯƠI NGON - SÁNG TẠO ĐỘT PHÁ, thúc đẩy ngành bán lẻ
        thực phẩm phát triển bằng các ứng dụng vượt trội nâng cao TRẢI NGHIỆM
        KHÁCH HÀNG.
      </div>
    ),
  },
];

const data = [
  {
    title: "01. CHÍNH TRỰC",
    color: "#F29A08",
    icon: "chinh-truc.png",
    image: "chinh-truc2.png",
  },
  {
    title: "02. CAM KẾT",
    color: "#19BBB3",
    icon: "cam-ket.png",
    image: "cam-ket2.png",
  },
  {
    title: "03. THÔNG SUỐT",
    color: "#0B6BB9",
    icon: "thong-suot.png",
    image: "thong-suot2.png",
  },
  {
    title: "04. LUÔN TIẾN TỚI",
    color: "#8DC13F",
    icon: "luon-tien-toi.png",
    image: "luon-tien-toi2.png",
  },
];

function RecruitmentPage() {
  return (
    <>
      <Breadcrumb
        data={[
          {
            link: "/tuyen-dung",
            title: "Tuyển dụng",
          },
        ]}
      />

      <main>
        <div>
          <img
            className="w-full h-auto"
            src={"/images/banner-recruit.png"}
            alt="banner-tuyen-dung"
          />
        </div>

        <div className="my-6 container mx-auto">
          <div className="pb-2 border-b text-orangeFF font-semibold text-[23px] border-b-[#616264]">
            HÀNH TRÌNH 8 NĂM & BỀN BỈ TIẾN BƯỚC
          </div>
          <div className="grid grid-cols-12 gap-x-8 gap-y-4 mt-6">
            <div className="col-span-12 lg:col-span-5">
              <div className="max-w-full">
                <iframe
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/ZM0Nq9iMjfI?si=BGnFBv2l3UJZaqNR"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 text-sm lg:text-[16px]">
              <p>
                ĐẢO HẢI SẢN ra đời vào năm 2015 từ một hòn đảo nhỏ thuộc Thành
                Phố Cam Ranh, Khánh Hoà. Xuất phát với mong muốn là cầu nối giúp
                những người dân đưa đến tay người tiêu dùng những hải sản sạch
                từ vùng biển đẹp, hoang sơ được đánh bắt và nuôi trồng hoàn toàn
                tự nhiên.
              </p>
              <p className="mt-4">
                ĐẢO HẢI SẢN vinh dự cung cấp cho hơn 150,000 Khách Hàng mỗi năm
                là những hộ gia đình mua hàng thường xuyên với hàng trăm ngàn
                đơn hàng và là đối tác thân thiết với các hệ thống siêu thị lớn
                như: Aeon, Lotte, Winmart, Emart, Kingfood và các nhà hàng lớn
                như White Palace, New World, Pizza4Ps, Gem Center,...
              </p>
              <p className="mt-4">
                Sự Hài Lòng và Niềm Tin của Khách Hàng là điều mà chúng tôi đặt
                lên hàng đầu trong suốt quá trình kinh doanh, chúng tôi nỗ lực
                mỗi ngày để cung cấp đến tay khách hàng những sản phẩm NGON
                NHẤT, SẠCH NHẤT và DỊCH VỤ KHÁCH HÀNG TỐT NHẤT.
              </p>
            </div>
          </div>
        </div>

        <div className="py-4 bg-orangeFF">
          <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div className="font-semibold text-[20px] mb-4 text-white ml-4">
                TRIẾT LÝ KINH DOANH - TẦM NHÌN & SỨ MỆNH
              </div>
              <Swiper
                spaceBetween={20}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="mySwiper slider-recruit !pb-10"
              >
                {sliders.map((item, key) => (
                  <SwiperSlide key={key}>
                    <div className="w-full h-full bg-[rgba(255,255,255,0.20)] py-4 px-6 rounded-[15px]">
                      <div className="text-[26px] font-semibold text-[#FDFF00]">
                        "{item?.title}"
                      </div>
                      <div className="text-white">{item.content}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div
          className="mt-[5px] py-[40px]"
          style={{
            background: "linear-gradient(180deg, #01B6F9 0%, #0079DC 100%)",
          }}
        >
          <div className="container mx-auto">
            <div className="flex gap-x-4 justify-center items-end">
              <div className="text-white text-[60px] leading-[60px] font-bold">
                04
              </div>
              <div className="text-white text-[32px] leading-[32px] font-semibold">
                GIÁ TRỊ CỐT LÕI & NIỀM TIN
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-start-2 lg:col-span-10">
                <div className="grid grid-cols-12 mt-8 gap-4">
                  {data?.map((item) => (
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                      <div
                        className={`w-full flex rounded-t-[30px] py-3 items-center gap-x-2 justify-center`}
                        style={{ background: item.color }}
                      >
                        <img src={`/images/${item.icon}`} />
                        <div className="text-white font-bold italic">
                          {item.title}
                        </div>
                      </div>

                      <div className="bg-white rounded-b-[30px] py-6 px-4">
                        <div className="min-h-[150px] text-sm">
                          Con người Trung Thực, ngay thẳng, không gian dối, có
                          trách nhiệm, coi trọng lời nói và luôn đặt lợi ích
                          công ty lên trên hết.
                        </div>
                        <div className="flex justify-center">
                          <img
                            src={`/images/${item.image}`}
                            className="w-[130px] h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-[64px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <div className="text-orangeFF font-semibold text-[20px] lg:text-[26px]">
                GIA NHẬP CUABIEN CÙNG PHÁT TRIỂN VƯƠN XA
              </div>

              <div className="my-6">
                <p>
                  Đến với CUABIEN, đến với những con người trẻ, đến với tư duy
                  đổi mới.
                </p>
                <p>Đến với những phúc lợi minh bạch, rõ ràng.</p>
                <p>Đến với sự phát triển toàn diện.</p>
                <p>
                  Đến với môi trường làm việc chuyên nghiệp và thái độ nhiệt
                  huyết.
                </p>
              </div>

              <p className="mb-6">
                Hãy đến cảm nhận và hãy trở thành một người “RẤT RA GÌ” tại ĐẢO.
              </p>

              <Link
                href={"/"}
                className="text-orangeFF flex items-center gap-x-2"
              >
                <span>Xem thêm về CUABIEN</span>
                <FiChevronRight size={20} />
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-7">
              <div className="flex items-center justify-between">
                <img
                  src="/images/recruit-top-1.webp"
                  className="w-[48%] rounded-[30px]"
                />
                <img
                  src="/images/recruit-top-2.webp"
                  className="w-[48%] rounded-[30px]"
                />
              </div>

              <div>
                <img
                  src="/images/recruit-bottom.webp"
                  className="mt-4 rounded-[30px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="banner-recruit-effect">
          <div className="container mx-auto py-8 lg:py-20">
            <div className="text-[18px] lg:text-[32px] text-white font-semibold text-center">
              Cơ hội nghề nghiệp cùng CUA BIEN
            </div>

            <div className="text-white text-[12px] lg:text-[20px] text-center mt-8">
              ĐẢO HẢI SẢN tạo ra môi trường làm việc tích cực, đáng để làm việc,
              tập trung vào hiệu quả và hướng đến phát triển bền vững. Môi
              trường làm việc năng động, thân thiện, cởi mở, công bằng, khuyến
              khích tư duy sáng tạo từ đó giúp bạn có cơ hội thể hiện tài năng
              của mình.
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-6">
          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                className="col-span-12 lg:col-span-6 border p-4 rounded-[10px] border-[#CCC] flex items-center gap-4"
                key={index}
              >
                <div className="min-w-[30px] lg:min-w-[80px] flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 1.9375C7.40545 1.9375 2.85141 6.39244 2.69183 11.9484C3.32237 11.5458 4.07144 11.3125 4.875 11.3125C7.11866 11.3125 8.9375 13.1313 8.9375 15.375V17.875C8.9375 20.1187 7.11866 21.9375 4.875 21.9375C2.63134 21.9375 0.8125 20.1187 0.8125 17.875V15.6875V15.375V12.25C0.8125 5.51903 6.26903 0.0625 13 0.0625C19.731 0.0625 25.1875 5.51903 25.1875 12.25V15.375V15.6875V16V17.875V18.5C25.1875 23.1599 21.4099 26.9375 16.75 26.9375H13C12.4822 26.9375 12.0625 26.5178 12.0625 26C12.0625 25.4822 12.4822 25.0625 13 25.0625H16.75C19.2095 25.0625 21.353 23.7095 22.4768 21.7072C22.0539 21.8563 21.5989 21.9375 21.125 21.9375C18.8813 21.9375 17.0625 20.1187 17.0625 17.875V15.375C17.0625 13.1313 18.8813 11.3125 21.125 11.3125C21.9286 11.3125 22.6776 11.5458 23.3082 11.9484C23.1486 6.39244 18.5945 1.9375 13 1.9375Z"
                      fill="#FF6100"
                    />
                  </svg>
                </div>

                <div className="w-full">
                  <div className="flex items-start justify-between gap-2 lg:gap-8">
                    <div className="text-xs lg:text-sm font-semibold">
                      NHÂN VIÊN ĐẶT HÀNG (KHÔNG YÊU CẦU KINH NGHIỆM)
                    </div>
                    <button className="py-2 px-2 lg:px-4 bg-orangeFF text-xs lg:text-sm text-white rounded-[8px] whitespace-nowrap">
                      Ứng tuyển
                    </button>
                  </div>

                  <div className="flex items-center gap-x-2 text-xs lg:text-sm mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1220_9959)">
                        <path
                          d="M11.9408 2.56868C11.0304 0.997661 9.41347 0.0378662 7.61537 0.00118652C7.53862 -0.000395508 7.46136 -0.000395508 7.38457 0.00118652C5.58651 0.0378662 3.96955 0.997661 3.05918 2.56868C2.12865 4.1745 2.1032 6.1034 2.99107 7.72853L6.71069 14.5367C6.71236 14.5398 6.71403 14.5428 6.71575 14.5458C6.87941 14.8302 7.17258 15 7.50003 15C7.82745 15 8.12063 14.8302 8.28425 14.5458C8.28598 14.5428 8.28765 14.5398 8.28932 14.5367L12.0089 7.72853C12.8968 6.1034 12.8713 4.1745 11.9408 2.56868ZM7.49997 6.79689C6.33686 6.79689 5.3906 5.85063 5.3906 4.68751C5.3906 3.5244 6.33686 2.57814 7.49997 2.57814C8.66309 2.57814 9.60935 3.5244 9.60935 4.68751C9.60935 5.85063 8.66312 6.79689 7.49997 6.79689Z"
                          fill="#FF6100"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1220_9959">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Khối văn phòng</span>
                  </div>

                  <div className="flex items-center gap-x-2 text-xs lg:text-sm mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1220_9966)">
                        <path
                          d="M7.5 0C3.35752 0 0 3.35785 0 7.5C0 11.6422 3.35752 15 7.5 15C11.6425 15 15 11.6418 15 7.5C15 3.35818 11.6422 0 7.5 0ZM7.954 10.8409V11.7091C7.954 11.8445 7.84858 11.9431 7.7128 11.9431H7.13412C6.99835 11.9431 6.88901 11.8445 6.88901 11.7091V10.9173C6.35635 10.8931 5.81912 10.7795 5.41244 10.6248C5.19213 10.5413 5.06941 10.3053 5.12783 10.0768L5.22216 9.7093C5.25512 9.58038 5.34129 9.47267 5.45912 9.41229C5.57694 9.35093 5.71533 9.34473 5.83903 9.39205C6.22645 9.54186 6.68404 9.65088 7.17264 9.65088C7.79473 9.65088 8.22066 9.41066 8.22066 8.97396C8.22066 8.55912 7.87143 8.29703 7.0633 8.02385C5.89517 7.63088 5.0952 7.08516 5.0952 6.02605C5.0952 5.06549 5.77506 4.3122 6.93731 4.08275V3.29094C6.93731 3.15549 7.05318 3.03407 7.18895 3.03407H7.76764C7.90341 3.03407 8.00296 3.15549 8.00296 3.29094V4.00605C8.51114 4.02792 8.878 4.10331 9.1848 4.20319C9.41686 4.27891 9.55394 4.52206 9.49291 4.75902L9.41 5.08802C9.37769 5.21335 9.29479 5.31975 9.18121 5.38111C9.06763 5.44247 8.93348 5.45357 8.81076 5.41146C8.53203 5.31583 8.16844 5.22901 7.70758 5.22901C6.99802 5.22901 6.76857 5.53484 6.76857 5.84066C6.76857 6.20099 7.15077 6.43011 8.07868 6.77967C9.37769 7.23824 9.89958 7.83879 9.89958 8.82088C9.89926 9.79253 9.21287 10.6229 7.954 10.8409Z"
                          fill="#FF6100"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1220_9966">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <strong>9,000,000</strong> - <strong>9,000,000</strong>{" "}
                      VNĐ
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default React.memo(RecruitmentPage);
