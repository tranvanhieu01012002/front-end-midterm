import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const ModalComponent = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Xem thong ke
      </Button>
      <Modal title="Modal thong ke" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <table>
          <thead>
            <th>Name</th>
            <th>So luong hien co</th>
          </thead>
          <tbody style={{border:"1px"}}>
            {props.data.map(item=><tr>
              <td>{item.name}</td>
              <td>{item.vegetables_count}</td></tr>)}
          </tbody>
        </table>
      </Modal>
    </>
  );
};

export default ModalComponent;
