import { getListTransports } from "@/apis/product";
import { ITransport } from "@/interfaces";
import { updateTransport } from "@/redux/slices";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import formatString from "@/utils/formatString";
import React, { useEffect, useState } from "react";

function DeliveryMethod() {
  const [listTransport, setListTransport] = useState<ITransport[]>([]);
  const { transport } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getTransports = async () => {
      try {
        const result = await getListTransports();
        setListTransport(result.data?.result || []);
        dispatch(updateTransport(result?.data?.result?.[0]));
      } catch (error) {
        console.log(error);
      }
    };
    getTransports();
  }, []);

  return (
    <div className="mt-4">
      <div className="font-semibold">Phương thức vận chuyển</div>
      <div className="mt-4  border border-[#D9D9D9] rounded-[10px]">
        {listTransport?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 text-sm p-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#D9D9D9]"
          >
            <div className="flex items-center gap-4">
              <input
                onChange={() => dispatch(updateTransport(item))}
                checked={transport?.id === item?.id}
                type="radio"
              />
              <div>
                <div>{item.name}</div>
              </div>
            </div>

            <div className="font-semibold">{formatString(20000)}đ</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryMethod;
