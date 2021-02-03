import React, { useState } from "react";
import { Form, Input, Switch, DatePicker, Modal, Button, Col } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { updateProject } from "../ops/API";
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
  updateProject,
  onCancel,
  projectVisible,
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
            updateProject(values);
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
        onFinish={updateProject}
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
            onChange={(e) => projectVisible(e)}
            checkedChildren="Public"
            unCheckedChildren="Private"
           
          />
        </Form.Item>
        <Form.Item
          name={"date"}
          label="Start Date"
          rules={[
            {
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
// const onFinish = async (values) => {
//     if (props.project?._id) {
//       await UpdateProject(props.project._id, values)
//         .then((result) => {
//           form.resetFields();
//           setStatus(result.data.message);
//         })
//         .then(() => {
//           props.status();
//           setTimeout(() => setStatus(undefined), 2000);
//         });
//     }
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

function UpdateProject(props) {
    console.log(props.project?._id)
  const [visible, setVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(true);
  const updateProject = async (values) => {
    try {
      await updateProject(values).then((e) => {
        console.log("Project Updated!");
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
        updateProject={updateProject}
        onCancel={() => setVisible(false)}
        projectVisible={setProjectVisible}
        fields={[{name: ["title"], value: props.project?.title},
        {name: ["description"], value: props.project?.description},
        // {name: ["date"], value: props.project?.date},
        {name: ["licence"], value: props.project?.licence},
        {name: ["isVisible"], checked: props.project?.isVisible}
          ]}
      />
    </div>
  );
}

export default UpdateProject;
