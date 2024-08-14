import React from 'react'
import car1 from "../../assets/car 1.svg"
import like from "../../assets/liked.svg"
import tuplam from "../../assets/tuplam.png"
import car2 from "../../assets/car 2.svg"
import car3 from "../../assets/car3.png"
import car4 from "../../assets/car4.png"
import { Button, Flex } from 'antd';
import MG from "../../assets/MG.png"
import ZX from "../../assets/ZX.png"
import ZS from "../../assets/ZS.png"
import EX from "../../assets/EX.png"
import CR from "../../assets/CR.png"
import ALL from "../../assets/all.png"
import V from "../../assets/V.png"
import RU from "../../assets/RU.png"
const Banner = () => {
  return (
    <div className='w-[1440px] '>
      <h2 className='text-3xl  mb-4 bg-[ #90A3BF] p-[30px]'>Popular Car</h2>
    <div className='grid grid-cols-4 gap-[30px] '>
    <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Koenigsegg</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">Sport</p>
            <img src={car1} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center  gap-[32px]">
                <strong className="text-xl">
                    $99.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
        </div>
        

        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Nissan GT - R</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">Sport</p>
            <img src={car2} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $80.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
            <del className='text-gray-400'>$100.00</del>
        </div>


        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Rolls - Royce</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">Sport</p>
            <img src={car3} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center  gap-[32px]">
                <strong className="text-xl">
                    $96.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
        </div>


        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Nissan GT - R</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">Sport</p>
            <img src={car4} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center  gap-[32px]">
                <strong className="text-xl">
                    $80.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
            <del className='text-gray-400'>$100.00</del>
        </div>
        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">All New Rush</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">SUV</p>
            <img src={RU} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $72.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
            <del className='text-gray-400'>$80.00</del>
        </div>
        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">CR  - V</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">SUV</p>
            <img src={V} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $80.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
        </div>
        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">All New Terios</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">SUV</p>
            <img src={ALL} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $74.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
        </div> 
        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">CR  - V</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">SUV</p>
            <img src={CR} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $80.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
        </div>
        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">MG ZX Exclusice</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">Hatchback</p>
            <img src={EX} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $76.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
            <del className='text-gray-400'>$80.00</del>
        </div>
        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">New MG ZS</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">SUV</p>
            <img src={ZS} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $80.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
        </div>
        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">MG ZX Excite</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">Hatchback</p>
            <img src={ZX} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $74.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
        </div>
        <div className="p-8 w-[300px] h-[358px] rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">New MG ZS</h2>
                <img src={like} alt="Like icon" className="w-6 h-6 cursor-pointer mx-2" />
            </div>

            <p className="text-sm text-gray-700 mb-6">SUV</p>
            <img src={MG} alt="Koenigsegg car" className="w-full h-auto mb-6" />

            <img src={tuplam} alt="Additional details" className="w-full h-auto mb-6" />

            <div className="flex justify-between items-center gap-[32px]">
                <strong className="text-xl">
                    $80.00/ <span className="text-gray-500">day</span>
                </strong>
                <Button type="primary">Rent Now</Button>
            </div>
            
        </div>
        </div>
        <Button className='px-[50px] py-[10px] mt-[20px] flex justify-center justify-items-center mx-auto my-[40px]' type="primary">Show more car</Button>
    </div>
  )
}

export default Banner

