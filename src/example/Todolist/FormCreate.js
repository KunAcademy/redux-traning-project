import React from "react";
import { useDispatch } from 'react-redux'
import { Button, Form, Input, Radio } from "antd";

import { addTask } from '../../redux/slice/todolistSlice';
import styles from "../../styles/Todo.module.scss";

const FormCreate = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (value) => {
    const submitValue = {
      id: (Math.random() + 1).toString(36).substring(7), // generate randowm string
      ...value,
    };
    dispatch(addTask(submitValue));
    form.resetFields();
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish} className={styles.formStyle}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input task title!" }]}
        >
          <Input placeholder="Enter task title"></Input>
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please choose task status" }]}
        >
          <Radio.Group>
            <Radio value={0}>Todo</Radio>
            <Radio value={1}>Doing</Radio>
            <Radio value={2}>Pending</Radio>
          </Radio.Group>
        </Form.Item>
        <Button htmlType="submit" className={styles.buttonSubmit}>
          Button
        </Button>
      </Form>
    </div>
  );
};

export default FormCreate;
