import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
export default function PageFooter() {
  return (
    <div>
      <Layout>
        <Footer
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            padding: "0",
            textAlign: "center",
          }}
        >
          © 2021 Created by Flancer Team
        </Footer>
      </Layout>
    </div>
  );
}
