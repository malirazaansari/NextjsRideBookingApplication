import { Modal, Button } from "antd";

const BookingSummaryModal = ({ bookingSummary, onClose }) => {
  return (
    <Modal
      open={true}
      title="Booking Summary"
      onCancel={onClose}
      footer={[
        <Button key="ok" type="primary" onClick={onClose}>
          OK
        </Button>,
      ]}
      centered
    >
      <div className="text-[var(--color-foreground)] text-sm">
        <p>
          <strong>Pickup Place:</strong> {bookingSummary.pickupPlace?.formatted_address || "N/A"}
        </p>
        <p>
          <strong>Dropoff Place:</strong> {bookingSummary.dropoffPlace?.formatted_address || "N/A"}
        </p>
        <p>
          <strong>Via Places:</strong>{" "}
          {bookingSummary.viaPlaces?.length
            ? bookingSummary.viaPlaces.map((place, idx) => (
                <span key={idx}>
                  {place?.formatted_address || "N/A"}
                  {idx < bookingSummary.viaPlaces.length - 1 ? ", " : ""}
                </span>
              ))
            : "None"}
        </p>
        <p>
          <strong>Distance:</strong> {bookingSummary.distance.toFixed(2)} km
        </p>
        <p>
          <strong>Name:</strong> {bookingSummary.tripDetails.name}
        </p>
        <p>
          <strong>Email:</strong> {bookingSummary.tripDetails.email}
        </p>
        <p>
          <strong>Phone:</strong> {bookingSummary.tripDetails.phone}
        </p>
        <p>
          <strong>Notes:</strong> {bookingSummary.tripDetails.notes || "None"}
        </p>
        <p>
          <strong>Selected Vehicle:</strong> {bookingSummary.selectedVehicle?.name || "N/A"}
        </p>
        <p>
          <strong>Extras:</strong>{" "}
          {bookingSummary.extras.meetAndGreet ? "Meet and Greet" : "None"}
          {bookingSummary.extras.waitAndReturn ? ", Wait and Return" : ""}
        </p>
        <p>
          <strong>Payment Method:</strong> {bookingSummary.paymentMethod}
        </p>
        <p>
          <strong>Date and Time:</strong> {bookingSummary.selectedDateTime || "N/A"}
        </p>
        <p>
          <strong>UTC Offset (Minutes):</strong> {new Date().getTimezoneOffset() * -1}
        </p>
      </div>
    </Modal>
  );
};

export default BookingSummaryModal;
