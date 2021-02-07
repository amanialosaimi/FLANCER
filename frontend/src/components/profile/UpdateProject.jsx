import React, { useState } from "react";
import { Form, Input, Switch, DatePicker, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import moment from 'moment';

import { API } from "../ops/API";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const UpdateProjectCollection = ({
  visible,
  updateCurrentProject,
  onCancel,
  setProjectVisible,
  currentProjectVisible,
  fields,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Update Your Project:"
      centered
      visible={visible}
      onOk={() =>
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            updateCurrentProject(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          })
      }
      okText="Update your Project"
      onCancel={onCancel}
      htmlType="submit"
    >
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={API.updateProject}
        // onFinishFailed={onFinishFailed}
        fields={fields}
      >
        <Form.Item
          name={"title"}
          label="Project Name"
          rules={[
            {
              required: true,
              message: "Project title is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={"isVisible"} label="Visibility">
          <Switch
            onChange={setProjectVisible}
            checkedChildren="Public"
            unCheckedChildren="Private"
            checked={currentProjectVisible}
          />
        </Form.Item>
        <Form.Item
          name={"date"}
          label="Start Date"
          format={'YYYY-MM-DD'}
          rules={[
            {
              required: false,
              message: "Start Date of your project required",
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
              message: "Technologies used for your project",
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
              message: "Licence used for your project",
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
              message: "Project description is required",
            },
          ]}
          name={"description"}
          label="Decription"
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function UpdateProject(props) {
  const [visible, setVisible] = useState(false);
  let currentProjectState = props.project?.isVisible === "true"
  const [projectVisible, setProjectVisible] = useState(currentProjectState);

  const toggleVisible = (e) => { setProjectVisible(e)}
  const updateCurrentProject = async (values, projectID = props.project._id) => {
    try {
      await API.updateProject(values, projectID).then((e) => {
        console.log("Project Updated!", values);
      });
      await props.status();
    } catch (err) {
      console.log(err);
    }
    return setVisible(false);
  };
  return (
    <div>
      <EditOutlined onClick={() => setVisible(true)} />

      <UpdateProjectCollection
        visible={visible}
        updateCurrentProject={updateCurrentProject}
        onCancel={() => setVisible(false)}
        setProjectVisible={toggleVisible}
        currentProjectVisible={projectVisible}
        fields={[{ name: ["title"], value: props.project?.title },
        { name: ["date"], value: moment(props.project?.date) },
        { name: ["technology"], value: props.project?.technology },
        { name: ["licence"], value: props.project?.licence },
        { name: ["url"], value: props.project?.url },
        { name: ["image"], value: props.project?.image },
        { name: ["description"], value: props.project?.description },
        ]}
        projectID={props.project?._id}
      />
    </div>
  );
}

export default UpdateProject;
