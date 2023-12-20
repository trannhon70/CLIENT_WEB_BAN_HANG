import Button from "@/app/components/button/Button";
import Heading from "@/app/components/heading/Heading";
import Image from "next/image";
import React, { useState } from "react";
import { FaBeer } from 'react-icons/fa';


const listItem=[
  {
    id:1,
    name:"abc"
  },
  {
    id:2,
    name:"xyz"
  },
]
const Recruitment = () => {
  const [active,setActive]= useState(1);
  return (
    <div className="py-12 lg:my-20">
      <Heading className="pb-6 text-base lg:text-xl">
        VĂN HÓA & TUYỂN DỤNG
      </Heading>
      <div className="relative w-full">
        <div className="w-full h-[300px] lg:h-[589px] relative">
          <Image
            src="/images/recruit.png"
            className="w-full h-full object-fill lg:object-cover"
            fill
            alt=""
          />
        </div>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center flex-col w-full">
            <h4 className="text-xl font-semibold uppercase text-white pb-4">
              KẾT QUẢ ĐỘT PHÁ TỪ
            </h4>
            <h3 className=" text-2xl lg:text-4xl font-semibold uppercase text-white whitespace-nowrap pb-14">
              ĐỘI NGŨ ƯU TÚ & TÍNH CAM KẾT CAO
            </h3>
          {
            listItem.map((item,index)=>(
              <Button icon={FaBeer} onClick={()=>setActive(item.id)}  className={`rounded-lg border bg-white text-red-500 ${index+1===active?"bg-blue-500":""}`}>
                {item.name}
              </Button>
           
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
