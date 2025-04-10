import React, { useState, useEffect } from "react";
import { Car, Bus, BusFront, Truck, Accessibility, CarTaxiFront , Info } from "lucide-react";
import VehicleFilter from "../components/VehicleFilter";
import PaymentForm from "../components/PaymentForm";
import WaitAndReturnModal from "../components/WaitAndReturnModal";
import VehicleCard from "../components/VehicleCard";

import { Modal, Button } from 'antd';


const vehicleIcons = {
  "Any Car": <BusFront size={24} />,
  "Saloon Car": <BusFront size={24} />,
  "Estate Car": <Car size={24} />,
  "MPV": <Truck size={24} />,
  "Executive Car": <CarTaxiFront size={24} />,
  "8 Seater Minibus": <Bus size={24} />,
  "Wheelchair Accessible Cars": <Accessibility size={24} />,
};

const VehicleSelection = ({ onWaitAndReturnConfirmed, isWaitAndReturnDisabled, distance, onBookNow, onVehicleSelect, onExtrasChange, onPaymentMethodChange, selectedDateTime }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [modalVehicle, setModalVehicle] = useState(null);
  const [extras, setExtras] = useState({
    meetAndGreet: false,
    waitAndReturn: false,
  });
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const calculateDynamicPrice = (basePrice, distance) => {
    if (distance === undefined || distance === null || isNaN(distance)) {
      console.error("Invalid distance value:", distance);
      return basePrice;
    }
    return (basePrice * distance).toFixed(2);
  };

  const calculateArrivalTime = (selectedDateTime) => {
    if (!selectedDateTime) return null;
    const date = new Date(selectedDateTime);
    date.setMinutes(date.getMinutes() + 30);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [vehicles, setVehicles] = useState([]);
  const [showWaitAndReturnModal, setShowWaitAndReturnModal] = useState(false);
  const [showWaitAndReturnInfoModal, setShowWaitAndReturnInfoModal] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    const newVehicles = [
      { id: 1, name: "Any Car", passengers: 4, luggage: 2, price: calculateDynamicPrice(1, distance), eta: "11:41", description: "A standard car suitable for up to 4 passengers and 2 luggage.", icon: vehicleIcons["Any Car"] },
      { id: 2, name: "Saloon Car", passengers: 4, luggage: 2, price: calculateDynamicPrice(1, distance), eta: "11:41", description: "Accommodates up to 4 passengers with space for 2 suitcases and 2 hand luggage items.", icon: vehicleIcons["Saloon Car"] },
      { id: 3, name: "Estate Car", passengers: 4, luggage: 4, price: calculateDynamicPrice(1.5, distance), eta: "11:41", description: "Spacious estate car for extra luggage capacity.", icon: vehicleIcons["Estate Car"] },
      { id: 4, name: "MPV", passengers: 6, luggage: 2, price: calculateDynamicPrice(1.8, distance), eta: "11:41", description: "Multi-purpose vehicle with more seats and comfort.", icon: vehicleIcons["MPV"] },
      { id: 5, name: "Executive Car", passengers: 4, luggage: 2, price: calculateDynamicPrice(2.3, distance), eta: "11:41", description: "Premium car for executive travel.", icon: vehicleIcons["Executive Car"] },
      { id: 6, name: "8 Seater Minibus", passengers: 8, luggage: 8, price: calculateDynamicPrice(2.5, distance), eta: "11:41", description: "Perfect for large groups with lots of luggage.", icon: vehicleIcons["8 Seater Minibus"] },
      { id: 7, name: "Wheelchair Accessible Cars", passengers: 5, luggage: 0, price: calculateDynamicPrice(2.6, distance), eta: "11:41", description: "Car equipped for wheelchair access.", icon: vehicleIcons["Wheelchair Accessible Cars"] },
    ];

    setVehicles(newVehicles);
  }, [distance]);

  useEffect(() => {
    if (selectedDateTime) {
      const updatedFilteredVehicles = vehicles.map((vehicle) => ({
        ...vehicle,
        eta: calculateArrivalTime(selectedDateTime),
      }));
      setFilteredVehicles(updatedFilteredVehicles);
    }
  }, [selectedDateTime, vehicles]);

  useEffect(() => {
    setFilteredVehicles(vehicles);
  }, [vehicles]);

  useEffect(() => {
    onVehicleSelect(selectedVehicle);
  }, [selectedVehicle]);

  useEffect(() => {
    onExtrasChange(extras);
  }, [extras]);

  useEffect(() => {
    onPaymentMethodChange(paymentMethod);
  }, [paymentMethod]);

  const handleWaitAndReturnChange = () => {
    setExtras((prevExtras) => ({
      ...prevExtras,
      waitAndReturn: !prevExtras.waitAndReturn,
    }));
    setShowWaitAndReturnModal(!extras.waitAndReturn);
  };

  const handleWaitAndReturnConfirm = (confirm) => {
    setShowWaitAndReturnModal(false);
    if (confirm) {
      onWaitAndReturnConfirmed();
    } else {
      setExtras((prevExtras) => ({ ...prevExtras, waitAndReturn: false }));
    }
  };

  const handlePaymentSuccess = (paymentId) => {
    console.log("Payment successful with ID:", paymentId);
    setIsPaymentCompleted(true);
    onBookNow();
  };

  const handlePayByCard = async () => {
    if (!selectedVehicle) {
      alert("Please select a vehicle before proceeding with payment.");
      return;
    }

    try {
      const response = await fetch("/api/stripe/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: selectedVehicle.price,
          currency: "usd",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create payment intent");
      }

      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    } catch (error) {
      console.error("Error creating payment intent:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div className="bg-[var(--color-secondary)] shadow-lg mx-auto p-6 pt-1 rounded-lg max-w-xl">
  <p className="font-semibold text-red-600 text-lg">
    Distance: {distance ? distance.toFixed(2) : "0.00"} km
  </p>

  <h2 className="mb-3 font-semibold text-[var(--color-foreground)] text-lg">
    Choose your vehicle
  </h2>

  <VehicleFilter
    onApply={(passengers, luggage) => {
      const updatedVehicles = vehicles.filter(
        (v) => v.passengers >= passengers && v.luggage >= luggage
      );
      setFilteredVehicles(updatedVehicles);
    }}
  />

  <div className="justify-center content-center gap-6 grid grid-cols-3 mt-4">
    {filteredVehicles.map((vehicle) => (
      <VehicleCard
        key={vehicle.id}
        vehicle={vehicle}
        selectedVehicle={selectedVehicle}
        onSelect={setSelectedVehicle}
        distance={distance}
        setModalVehicle={setModalVehicle}
      />
    ))}
  </div>

  {modalVehicle && (
    <Modal
      open={!!modalVehicle}
      onCancel={() => setModalVehicle(null)}
      footer={[
        <Button key="ok" type="primary" onClick={() => setModalVehicle(null)}>
          OK
        </Button>,
      ]}
      title={modalVehicle.name}
    >
      <p>{modalVehicle.description}</p>
    </Modal>
  )}

  <h2 className="mt-5 font-semibold text-[var(--color-foreground)] text-lg">
    Extras
  </h2>
  <div className="flex flex-col">
    <label className="inline-flex items-center mt-2">
      <input
        type="checkbox"
        checked={extras.meetAndGreet}
        onChange={() =>
          setExtras({ ...extras, meetAndGreet: !extras.meetAndGreet })
        }
        className="mr-2"
      />
      Meet and Greet
    </label>
    <label className="inline-flex items-center mt-2">
      <input
        type="checkbox"
        checked={extras.waitAndReturn}
        onChange={handleWaitAndReturnChange}
        className="mr-2"
        disabled={isWaitAndReturnDisabled}
      />
      <span
        className={
          isWaitAndReturnDisabled
            ? "text-gray-400"
            : "text-[var(--color-foreground)]"
        }
      >
        Wait and Return
      </span>
      <button
        className="ml-2 text-gray-500 hover:text-gray-700"
        onClick={(e) => {
          e.stopPropagation();
          setShowWaitAndReturnInfoModal(true);
        }}
      >
        <Info size={20} />
      </button>
    </label>
  </div>

  <Modal
    open={showWaitAndReturnInfoModal}
    onCancel={() => setShowWaitAndReturnInfoModal(false)}
    footer={[
      <Button
        key="ok"
        type="primary"
        onClick={() => setShowWaitAndReturnInfoModal(false)}
      >
        OK
      </Button>,
    ]}
    title="Wait and Return"
    centered
  >
    <p>
      Choose this option for the best price if you want the driver to wait for
      you at your destination and take you back to the same place where you were
      picked up from <strong>(waiting charges may apply)</strong>.
    </p>
    <p>
      This option will automatically use your pick up address as your final
      destination.
    </p>
  </Modal>

  {showWaitAndReturnModal && (
    <WaitAndReturnModal
      onConfirm={handleWaitAndReturnConfirm}
      onClose={() => setShowWaitAndReturnModal(false)}
    />
  )}

  <h2 className="mt-5 font-semibold text-[var(--color-foreground)] text-lg">
    Choose your payment method:
  </h2>
  <div className="flex flex-col space-y-2">
    <label className="flex items-center">
      <input
        type="radio"
        name="payment"
        value="cash"
        checked={paymentMethod === "cash"}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="mr-2"
      />
      Pay by Cash
    </label>

    <label className="flex items-center">
      <input
        type="radio"
        name="payment"
        value="googlepay"
        checked={paymentMethod === "googlepay"}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="mr-2"
      />
      <span className="flex items-center">
        <img src="g-pay.png" alt="Google Pay" className="mr-1 h-4" /> Google Pay
      </span>
    </label>

    <label className="flex items-center">
      <input
        type="radio"
        name="payment"
        value="card"
        checked={paymentMethod === "card"}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="mr-2"
      />
      Pay by Card
    </label>

    {paymentMethod === "card" && !isPaymentCompleted && selectedVehicle && (
      <>
        {!clientSecret ? (
          <button
            className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] mt-4 px-6 py-2 rounded text-white"
            onClick={handlePayByCard}
          >
            Proceed to Pay
          </button>
        ) : (
          <PaymentForm
            amount={selectedVehicle.price}
            clientSecret={clientSecret}
            onPaymentSuccess={handlePaymentSuccess}
          />
        )}
      </>
    )}
  </div>

  {paymentMethod !== "card" || isPaymentCompleted ? (
    <button
      className="bg-[var(--color-primary)] mt-5 py-2 rounded-lg w-full font-semibold text-white text-lg"
      onClick={onBookNow}
    >
      Book Now
    </button>
  ) : null}
</div>

  );
};

export default VehicleSelection;
