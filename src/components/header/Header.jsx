import React from "react";
import car1 from "../../assets/car 1.svg";
import car2 from "../../assets/car 2.svg";
import { Radio } from "antd";
import { Select } from "antd";
import Switch from "../../assets/switch.png";

const Header = () => {
  const onChange = (value) => {};
  const onSearch = (value) => {};
  return (
    <div>
      <div className=" bg-[white] h-[auto]  flex justify-between items-center w-[1440px] py-[50px] ">
        
        <div className="w-[640px] h-[360px] bg-[#54A6FF] rounded-[10px] flex flex-col justify-start items-start text-white p-6">
          <p className="w-[286px] text-4xl font-{600} mb-4">
            The Best Platform for Car Rental
          </p>
          <p className="w-[286px] mb-6">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="bg-[#3563E9] text-white-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-300">
          Rental Car
          </button>
          <img className="w-[406px]" src={car1} alt="" />
        </div>

        <div className="w-[640px] h-[360px] bg-[#3563E9] rounded-[10px] flex flex-col justify-start items-start text-white p-6">
          <p className="w-[286px] text-4xl font-{600} mb-4">
          Easy way to rent a car at a low price
          </p>
          <p className="w-[286px] mb-6">
          Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <button className="bg-[#54A6FF] text-white-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-300">
          Rental Car
          </button>
          <img className="w-[340px]" src={car2} alt="" />
        </div>

      </div>

      <div className="flex">
        <div className="w-[582px h-[132px] rounded-2xl bg-[white] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-[30px]">
          <Radio>Pick - Up</Radio>
          <div className=" flex gap-[50px]   ">
            <div>
              <h3>Locations</h3>
              <Select
                showSearch
                className="my-[10px] border-{none}"
                placeholder="Select your city"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "Navoiy",
                    label: "Navoiy",
                  },
                  {
                    value: "Samarqand",
                    label: "Samarqand",
                  },
                  {
                    value: "Namangan",
                    label: "Namangan",
                  },
                  {
                    value: "Andijon",
                    label: "Andijon",
                  },
                  {
                    value: "Toshkent",
                    label: "Toshkent",
                  },
                ]}
              />
            </div>
            <hr className="w-[2px] h-[50px] bg-[#C4C4C4] my-[10px]" />
            <div>
              <h3>Date</h3>
              <Select
                showSearch
                className="my-[10px]"
                placeholder="Select date"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: " 1 - 10",
                    label: " 1 - 10",
                  },
                  {
                    value: "10 - 20",
                    label: "10 - 20",
                  },
                  {
                    value: "20 - 30",
                    label: "20 - 30",
                  },
                ]}
              />
            </div>
            <hr className="w-[2px] h-[50px] bg-[#C4C4C4] my-[10px]" />

            <div>
              <h3>Time</h3>
              <Select
                showSearch
                className="my-[10px]"
                placeholder="Select time"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "10:00",
                    label: "10:00",
                  },
                  {
                    value: "11:00",
                    label: "11:00",
                  },
                  {
                    value: "12:00",
                    label: "12:00",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div>
          <img className="my-[40px] w-[102px]" src={Switch} alt="" />
        </div>

        <div className="w-[582px h-[132px] rounded-3xl bg-[white] shadow-lg p-[30px]">
          <Radio className="">Drop - Off</Radio>

          <div className=" flex gap-[50px]   ">
            <div>
              <h3>Locations</h3>
              <Select
                showSearch
                className="my-[10px]"
                placeholder="Select your city"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "Navoiy",
                    label: "Navoiy",
                  },
                  {
                    value: "Samarqand",
                    label: "Samarqand",
                  },
                  {
                    value: "Namangan",
                    label: "Namangan",
                  },
                  {
                    value: "Andijon",
                    label: "Andijon",
                  },
                  {
                    value: "Toshkent",
                    label: "Toshkent",
                  },
                ]}
              />
            </div>
            <hr className="w-[2px] h-[50px] bg-[#C4C4C4] my-[10px]" />
            <div>
              <h3>Date</h3>
              <Select
                showSearch
                className="my-[10px]"
                placeholder="Select date"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: " 1 - 10",
                    label: " 1 - 10",
                  },
                  {
                    value: "10 - 20",
                    label: "10 - 20",
                  },
                  {
                    value: "20 - 30",
                    label: "20 - 30",
                  },
                ]}
              />
            </div>
            <hr className="w-[2px] h-[50px] bg-[#C4C4C4] my-[10px]" />

            <div>
              <h3>Time</h3>
              <Select
                showSearch
                className="my-[10px]"
                placeholder="Select time"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "10:00",
                    label: "10:00",
                  },
                  {
                    value: "11:00",
                    label: "11:00",
                  },
                  {
                    value: "12:00",
                    label: "12:00",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
