import React from "react";

const Widget = () => {
  return (
    <>
      <div className="hidden lg:block flex-1 max-w-[350px] text-[15px]">
        <div className="hidden lg:block">
          <div className=" bg-white px-3 pb-3 py-1">
            <input
              type="text"
              className="w-full p-3 mt-1 rounded-3xl bg-gray-100 placeholder:text-sm placeholder:p-2 outline-none active:bg-white focus:bg-white duration-100 focus:outline-2 focus:outline-green-500 px-5"
              placeholder="Search"
            />
          </div>
          {/* <div className="pt-[62px]"></div> */}
          <div className="w-full px-3 pb-3 py-1">
            <div className="px-3 w-full bg-gray-50 rounded-3xl mt-2">
              <h3 className="text-xl font-bold p-2">Today's Summary</h3>
              <div className="p-2 flex">
                <div className="flex-1 max-w-[50px]">In :</div>
                <div>7:32am</div>
              </div>
              <div className="p-2 flex">
                <div className="flex-1 max-w-[50px]">Out :</div>
                <div>5:10pm</div>
              </div>
            </div>
          </div>

          <div className="w-full px-3 pb-3 py-1">
            <div className="px-3 w-full bg-gray-50 rounded-3xl mt-2">
              <h3 className="text-xl font-bold p-2">Todos</h3>
              <div className="p-2 flex">
                <div className="flex-1 max-w-[50px]">In :</div>
                <div>7:32am</div>
              </div>
              <div className="p-2 flex">
                <div className="flex-1 max-w-[50px]">Out :</div>
                <div>5:10pm</div>
              </div>
            </div>
          </div>

          <div className="w-full px-3 pb-3 py-1">
            <div className="px-3 w-full bg-gray-50 rounded-3xl mt-2">
              <h3 className="text-xl font-bold p-2">Birthday Celebrants</h3>
              <div className="p-2 flex">
                <div className="flex-1 max-w-[50px]">In :</div>
                <div>7:32am</div>
              </div>
              <div className="p-2 flex">
                <div className="flex-1 max-w-[50px]">Out :</div>
                <div>5:10pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
