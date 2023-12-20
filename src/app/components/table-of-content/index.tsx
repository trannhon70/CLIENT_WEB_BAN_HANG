import React from "react";

export interface IContentItem {
  h2: {
    content: string;
    offset: number;
  };
  h3?: {
    h3: {
      content: string;
      offset: number;
    };
    h4?: {
      content: string;
      offset: number;
    }[];
  }[];
}

type Props = {
  data: IContentItem[];
};

function TableOfContent({ data }: Props) {
  return (
    <div className="border border-[#AAA] px-4 lg:px-12 py-3 lg:py-6 bg-[#F9F9F9] shadow rounded-[6px] w-full">
      <div className="text-center text-md lg:text-lg font-semibold">
        Các nội dung chính
      </div>
      <div className="w-full mt-1 lg:mt-3">
        {data?.map((content, h2Index: number) => (
          <div key={h2Index}>
            <p
              className="text-lg font-semibold cursor-pointer hover:text-orangeFF transition-all duration-250 mt-2 lg:mt-3"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(`#section-${h2Index + 1}`)
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              {content?.h2?.content}
            </p>

            <ul className="pl-4">
              {content?.h3?.map((item, h3Index) => (
                <li key={h3Index}>
                  <p
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#section-${h2Index + 1}-${h3Index + 1}`)
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="text-sm text-[#202223] cursor-pointer hover:text-orangeFF transition-all duration-250 mt-2"
                  >
                    {item?.h3?.content}
                  </p>

                  <ul className="pl-4">
                    {item?.h4?.map((item, h4Index) => (
                      <li key={h4Index}>
                        <p
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .querySelector(
                                `#section-${h2Index + 1}-${h3Index + 1}-${
                                  h4Index + 1
                                }`
                              )
                              ?.scrollIntoView({
                                behavior: "smooth",
                              });
                          }}
                          className="text-sm text-[#202223] cursor-pointer hover:text-orangeFF transition-all duration-250 mt-2"
                        >
                          {item?.content}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableOfContent;
