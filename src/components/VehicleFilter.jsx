import { useState } from "react";
import { Funnel } from "lucide-react";
import { Modal, Button, InputNumber, Space } from "antd";

const VehicleFilter = ({ onApply }) => {
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    onApply(passengers, luggage);
    setIsOpen(false);
  };

  const handleClear = () => {
    setPassengers(1);
    setLuggage(0);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<Funnel size={16} />}
        onClick={() => setIsOpen(true)}
      >
        Filter
      </Button>

      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onOk={handleApply}
        title="Filter Vehicles"
        centered
        okText="Apply"
        footer={[
          <Button key="clear" onClick={handleClear}>
            Clear
          </Button>,
          <Button key="cancel" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>,
          <Button key="apply" type="primary" onClick={handleApply}>
            Apply
          </Button>,
        ]}
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-1 font-semibold">Passengers</p>
            <InputNumber
              min={1}
              value={passengers}
              onChange={setPassengers}
              className="w-full"
            />
          </div>
          <div>
            <p className="mb-1 font-semibold">Luggage</p>
            <InputNumber
              min={0}
              value={luggage}
              onChange={setLuggage}
              className="w-full"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VehicleFilter;
