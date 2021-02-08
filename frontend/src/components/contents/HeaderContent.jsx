import {
    Breadcrumb,
    Divider
} from "antd";
export default function HeaderContent(props) {
    return (
        <Breadcrumb style={{ margin: "28px 0" }}>
            <Divider orientation="center" type="horizontal">
                <h1 className="large-font">
                    <b>{props.title}</b>
                </h1>
            </Divider>
            {props.h2 ?
                <h2 className="semi-large-font" style={{ textAlign: "center" }}>
                    {props.h2}
                </h2> : ""}

        </Breadcrumb>

    )
}
