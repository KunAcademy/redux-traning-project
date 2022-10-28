import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

import { removeTask, editTask } from "../../redux/slice/todolistSlice";
import styles from "../../styles/Todo.module.scss";

const Task = ({ item, dispatch }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form] = Form.useForm();

  const renderStatusTask = (status) => {
    let text = "";
    let style = "";
    switch (status) {
      case 0:
        text = "Todo";
        style = "todoStyle";
        break;
      case 1:
        text = "Doing";
        style = "doingStyle";
        break;
      case 2:
        text = "Pending";
        style = "pendingStyle";
        break;
      default:
        text = "Todo";
        style = "todoStyle";
    }

    return (
      <div className={`${styles.baseStatus} ${styles[style]}`}>{text}</div>
    );
  };

  const onFinish = (value) => {
    const submitValue = {
      id: item.id,
      ...value,
    };
    dispatch(editTask(submitValue));
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (item) {
      form.setFieldsValue({
        ...item,
      });
    }
  }, [item, isOpenModal]);

  return (
    <>
      <div className={styles.taskStyle}>
        <div className={styles.taskContent}>
          <div className={styles.title}>
            <span>{item.title}</span>
            <span>{item.description}</span>
          </div>
          <div>{renderStatusTask(item.status)}</div>
        </div>
        <div className={styles.buttonTask}>
          <Button onClick={() => setIsOpenModal(true)}>Edit</Button>
          <Button onClick={() => dispatch(() => dispatch(removeTask(item.id)))}>
            Delete
          </Button>
        </div>
      </div>

      {isOpenModal && (
        <Modal
          open={isOpenModal}
          closeIcon={<></>}
          closable
          title={null}
          footer={null}
        >
          <div>
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  { required: true, message: "Please input task title!" },
                ]}
              >
                <Input placeholder="Enter task title"></Input>
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea
                  row={4}
                  placeholder="Enter task title"
                ></Input.TextArea>
              </Form.Item>
              <Form.Item
                name="status"
                label="Status"
                rules={[
                  { required: true, message: "Please choose task status" },
                ]}
              >
                <Radio.Group>
                  <Radio value={0}>Todo</Radio>
                  <Radio value={1}>Doing</Radio>
                  <Radio value={2}>Pending</Radio>
                </Radio.Group>
              </Form.Item>
              <div className={styles.buttonWrapper}>
                <Button
                  onClick={() => setIsOpenModal(false)}
                  className={styles.buttonSubmit}
                >
                  Cancel
                </Button>
                <Button htmlType="submit" className={styles.buttonSubmit}>
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Task;
