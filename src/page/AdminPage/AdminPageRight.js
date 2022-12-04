import {
  Space,
  Table,
  Modal,
  Button,
  Form,
  Input,
  notification,
  Switch,
} from "antd";
import { useEffect, useState } from "react";
import "./AdminCss.css";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "recompose";

import { selectRights } from "../IndexPage/rightstore/selector";
import {
  asyncCreateRightAction,
  asyncUpdateRightAction,
  asyncDeleteRightAction,
  asyncGetDetailRightAction,
} from "../IndexPage/rightstore/action";
import { useNavigate } from "react-router-dom";
import { asyncGetAllRightAction } from "./../IndexPage/rightstore/action";

const AdminPageRight = (props) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Introduction",
      dataIndex: "introduction",
      key: "introduction",
    },
    {
      title: "Paragraph",
      dataIndex: "paragraph",
      key: "paragraph",
    },
    {
      title: "Image",
      dataIndex: "imgsrc",
      key: "imgsrc",
      render: (value, record) => (
        <img className="imgCss" src={value} alt={record.imgalt} />
      ),
    },
    {
      title: "Image Description",
      dataIndex: "imgdesc",
      key: "imgdesc",
    },
    {
      title: "Display",
      dataIndex: "display",
      key: "age",
      render: (value, record) => (
        <Switch
          defaultChecked={value}
          disabled={displayData}
          onChange={() => updateDisplayContent(record)}
        />
      ),
    },
    {
      title: "Action",
      render: (text, record) => {
        return (
          <Space>
            <button onClick={() => onEdit(record.id)}>Edit</button>
            <button onClick={() => onDelete(record.id)}>Delete</button>
          </Space>
        );
      },
    },
  ];

  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [onEditTask, setOnEditTask] = useState(true);
  const [displayData, setDisplayData] = useState(false);
  const navigate = useNavigate();
  const {
    getAllRightDispatch,
    createRightDispatch,
    updateRightDispatch,
    deleteRightDispatch,
    getDetailRightDispatch,
  } = props;
  const { listRight } = props;

  // useEffect(() => {
  //     const user = localStorage.getItem("token")
  //     if (!user) {
  //         navigate("login")
  //     } else {
  //         getAllRightDispatch();
  //     }
  // }, [])
  useEffect(() => {
    getAllRightDispatch();
  }, []);

  const updateDisplayContent = async (values) => {
    setDisplayData(true);
    const response = await updateRightDispatch({
      ...values,
      display: !values.display,
    });
    if (response === 200) {
      await getAllRightDispatch();
      setDisplayData(false);
      // setTimeout(() => {
      //     setDisplayData(false)
      // }, 1000);
    }
  };

  const onDelete = async (id) => {
    const response = await deleteRightDispatch(id);
    if (response === 200) {
      getAllRightDispatch();
    }
  };

  const onEdit = async (id) => {
    const response = await getDetailRightDispatch(id);
    if (response.status === 200) {
      form.setFieldsValue({
        title: response.data.title,
        author: response.data.author,
        id: response.data.id,
        introduction: response.data.introduction,
        paragraph: response.data.paragraph,
        imgsrc: response.data.imgsrc,
        imgdesc: response.data.imgdesc,
      });
      setIsModalVisible(true);
    }
    setOnEditTask(true);
  };

  const createRight = () => {
    setIsModalVisible(true);
    setOnEditTask(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSubmit = async (values) => {
    if (onEditTask) {
      const response = await updateRightDispatch(values);
      if (response === 200) {
        getAllRightDispatch();
        notification.open({
          message: "Edit",
          description: "Content Updated",
        });
      }
    } else {
      const response = await createRightDispatch(values);
      if (response === 201) {
        getAllRightDispatch();
        notification.open({
          message: "Create",
          description: "Content added",
        });
      }
    }

    form.resetFields();
    handleCancel();
  };

  return (
    <div className="adminPage">
      <button onClick={() => createRight()} className="adminButton">
        Create Right
      </button>
      <button onClick={() => navigate("/")} className="adminButton">
        Return
      </button>
      <Table dataSource={listRight} columns={columns} rowKey="id" />;
      <Modal
        title={onEditTask ? "Edit content" : "Create content"}
        visible={isModalVisible}
        onCancel={() => handleCancel()}
        footer={
          <Space>
            <Button onClick={() => handleCancel()}>Close</Button>
            <Button type="primary" htmlType="submit" form="form">
              Send
            </Button>
          </Space>
        }
      >
        <Form
          form={form}
          name="form"
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onSubmit}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item label="id" name="id" style={{ display: "none" }}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input content title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Author"
            name="author"
            rules={[
              {
                required: true,
                message: "Please input author!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Introduction"
            name="introduction"
            rules={[
              {
                required: true,
                message: "Please input content introduction!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Paragraph"
            name="paragraph"
            rules={[
              {
                required: true,
                message: "Please input content!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image"
            name="imgsrc"
            rules={[
              {
                required: false,
                message: "Please input content image!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image Description"
            name="imgdesc"
            rules={[
              {
                required: false,
                message: "Please input content image description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  listRight: selectRights,
});

const mapDispatchToProps = (dispatch) => ({
  //getAllRightDispatch: (payload) => dispatch(getAllRightAction(payload)),
  getAllRightDispatch: (payload) => asyncGetAllRightAction(dispatch)(payload),
  createRightDispatch: (payload) => asyncCreateRightAction(dispatch)(payload),
  updateRightDispatch: (payload) => asyncUpdateRightAction(dispatch)(payload),
  deleteRightDispatch: (payload) => asyncDeleteRightAction(dispatch)(payload),
  getDetailRightDispatch: (payload) =>
    asyncGetDetailRightAction(dispatch)(payload),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AdminPageRight);
