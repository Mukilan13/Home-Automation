import { useState } from "react";
import fan from "../assets/fan.png";
import ac from "../assets/ac.png";
import tv from "../assets/tv.png";
import bulb from "../assets/bulb.webp";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Devices = () => {
  const [devices, setDevices] = useState([
    { id: 0, name: "Living Room Bulb", status: true, image: bulb, function: toggleBulb },
    { id: 1, name: "Living Room Fan", status: false, image: fan },
    { id: 2, name: "Living Room Tv", status: false, image: tv },
    { id: 3, name: "Living Room Ac", status: false, image: ac },
    // Add more devices as needed
  ]);

  const toggleSwitch = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, status: !device.status } : device
      )
    );
    devices[id].function();
  };

  function toggleBulb() {
    console.log('====================================');
    console.log("Bulb turn on function called");
    console.log('====================================');
  }

  return (
    <div className="w-full !px-6 !py-4">
      <h1 className="text-2xl font-bold !mb-6">All Devices</h1>
      <div className="all-devices w-full flex flex-col gap-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className="bg-[#dfdede9c] rounded-lg flex justify-between items-center !p-4"
          >
            <div className="flex justify-start items-center gap-4">
              <img className="w-12 h-12" src={device.image} alt={device.name} />
              <div>
                <h3 className="text-lg font-semibold">{device.name}</h3>
                <p className="text-[12px]">
                  Status: {device.status ? "Active" : "Inactive"}
                </p>
              </div>
            </div>
            <div
              className="w-12 h-6 bg-[#1c1c1cfe] rounded-3xl relative cursor-pointer"
              onClick={() => toggleSwitch(device.id)}
            >
              <div
                className={`w-5 h-5 rounded-full absolute ${
                  device.status
                    ? "left-[74%] bg-green-500"
                    : "left-[26%] bg-red-400"
                } top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full !mt-6 !py-2 text-white bg-black rounded-3xl flex justify-center items-center gap-2 cursor-pointer">
        <AddRoundedIcon className="!text-[24px]" />
        <h1>Add Device</h1>
      </div>
    </div>
  );
};

export default Devices;
