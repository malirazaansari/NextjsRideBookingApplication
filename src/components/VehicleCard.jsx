import { Info } from "lucide-react";

const VehicleCard = ({ vehicle, selectedVehicle, onSelect, distance, setModalVehicle }) => (
  <div
    className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer text-center w-40 shadow-md transition-all ${
      selectedVehicle?.id === vehicle.id ? "bg-blue-500 text-white" : "bg-gray-400 hover:bg-gray-500"
    }`}
    onClick={() => onSelect(vehicle)}
  >
    {vehicle.icon}
    <p className="mt-2 font-semibold text-sm">{vehicle.name}</p>
    <p className="flex items-center gap-2 mt-1 text-xs">
      👤 {vehicle.passengers} | 🛄 {vehicle.luggage}
    </p>
    {distance > 0 ? (
      <>
        <p className="mt-1 font-bold text-sm">€{vehicle.price}</p>
        <p className="mt-1 text-gray-600 text-sm">Arrival: {vehicle.eta || "N/A"}</p>
      </>
    ) : (
      <p className="mt-1 font-bold text-gray-400 text-sm">Select places to see price</p>
    )}
    <button
      className="mt-2 text-gray-500 hover:text-gray-700"
      onClick={(e) => {
        e.stopPropagation();
        setModalVehicle(vehicle);
      }}
    >
      <Info size={20} />
    </button>
  </div>
);

export default VehicleCard;
