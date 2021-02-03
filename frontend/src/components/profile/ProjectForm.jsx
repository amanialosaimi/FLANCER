import React, { useState } from "react";
import { Form, Input, Switch, DatePicker, Modal, Button, Col } from "antd";
import { createProject } from "../ops/API"
const style = {
  height: 30,
  width: 120,
  lineHeight: "10px",
  borderRadius: 4,
  backgroundColor: "#006466",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
  padding: 0,
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const ProjectCollection = ({ visible, createNewProject, onCancel, projectVisible }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Create New Project:"
      centered
      visible={visible}
      onOk={() => form
        .validateFields()
        .then((values) => {
          form.resetFields();
          createNewProject(values);
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        })
      }
      okText="Create New Project"
      onCancel={onCancel}
      htmlType="submit"
    >
      <Form
        {...layout}
        form={form}
        name="nest-messages"
      >
        <Form.Item
          name={"title"}
          label="Project Name"
          rules={[
            {
              required: true,
              message: "Project title is required"
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"isVisible"}
          label="Visibility">
          <Switch onChange={(e)=>projectVisible(e)} checkedChildren="Public" unCheckedChildren="Private" defaultChecked />
        </Form.Item>
        <Form.Item
          name={"date"}
          label="Start Date"
          rules={[
            {
              required: true,
              message: "Start Date of your project required"
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name={"technology"}
          label="Technologies"
          rules={[
            {
              message: "Technologies used for your project"
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"licence"}
          label="Licence"
          rules={[
            {
              message: "Licence used for your project"
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={"url"} label="Website Link">
          <Input />
        </Form.Item>
        <Form.Item name={"image"} label="Image URL">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Project description is required"
            },
          ]}
          name={"description"}
          label="Decription"
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default function ProjectForm(props) {
  const [visible, setVisible] = useState(false)
  const [projectVisible, setProjectVisible] = useState(true)
  const createNewProject = async (values) => {
    try {
      await createProject(values).then((e) => { console.log("Project Added!") })
      await props.status()
    } catch (err) {
      console.log(err)
    }
    return setVisible(false)
  }
  return (
    <>
      <Col span={20} style={{
        top: "50px",
        right: "45px",
        position: "fixed",
        zIndex: "1"
      }}>
        <Button style={style} onClick={() => setVisible(true)}>
          Create Project +
          </Button>
      </Col>
      <ProjectCollection
        visible={visible}
        createNewProject={createNewProject}
        onCancel={() => setVisible(false)}
        projectVisible={setProjectVisible}
      />
    </>
  );
}
