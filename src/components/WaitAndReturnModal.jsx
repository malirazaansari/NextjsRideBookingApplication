import { Modal, Button } from 'antd';

const WaitAndReturnModal = ({ onConfirm, onClose }) => {
  const handleNo = () => {
    onConfirm(false);
    onClose();
  };

  const handleYes = () => {
    onConfirm(true);
    onClose();
  };

  return (
    <Modal
      open={true}
      onCancel={onClose}
      footer={[
        <Button key="no" onClick={handleNo} danger>
          No
        </Button>,
        <Button key="yes" type="primary" onClick={handleYes}>
          Yes
        </Button>,
      ]}
      title="Wait and Return"
    >
      <p>
        This option will select your pickup place as the drop-off place too, and will visit the first selected drop-off place.
      </p>
      <p>Instructions:</p>
      <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc' }}>
        <li>Your pickup address will be set as the drop-off address.</li>
        <li>The first selected drop-off address will be added as a via address.</li>
        <li>The map and address fields will be updated accordingly.</li>
      </ul>
    </Modal>
  );
};

export default WaitAndReturnModal;
