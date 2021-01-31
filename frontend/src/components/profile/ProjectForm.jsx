import React, { Component } from "react";
import { Form, Input, DatePicker, Modal, Button, Col } from "antd";
const style = {
  height: 40,
  width: 120,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#006466",
  color: "#fff",
  textAlign: "center",
  fontSize: 16,
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
const validateMessages = {
  required: "${label} is required!",
};

export default class ProjectForm extends Component {
  state = {
    modal1Visible: false,
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }
  render() {
    return (
      <>
        <Col span={20} style={{ margin: "0 1100px 10px" }}>
          <Button style={style} onClick={() => this.setModalVisible(true)}>
            Add Project +
          </Button>
        </Col>
        <Modal
          title="Create New Project:"
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <Form
            {...layout}
            name="nest-messages"
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Project Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "number"]}
              label="Start Date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item name={["user", "website"]} label="Website Link">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "url"]} label="Image URL">
              <Input />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name={["user", "Decription"]}
              label="Decription"
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button style={style} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
