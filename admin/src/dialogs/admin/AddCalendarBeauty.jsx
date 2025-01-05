import { useEffect, useState } from 'react';
import {
  Modal,
  Button,
  Form,
  Select,
} from 'antd';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import styled from 'styled-components';

import api from '@/services/api.js';

const CustomForm = styled(Form)({
  marginTop: 24,
  marginBottom: 24,
});


const AddCalendarBeauty = NiceModal.create(({ data, onSuccess, messageApi }) => {
  const modal = useModal();
  const [form] = Form.useForm();
  const [isEditMode, setIsEditMode] = useState(false);
  const [beautyTreatments, setBeautyTreatment] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    api.getBeautyTreatments().then(response => {
      response.data = response.data.map(item => ({
        label: item.title,
        value: item._id,
      }));
      setBeautyTreatment(response.data);
    }).catch(error => {
      console.log('Get beauty treatment error', error);
      messageApi.error('Lỗi khi tải danh sách lịch');
    });

    api.getUsers().then(response => {
      response.data = response.data.map(item => ({
        label: item.name,
        value: item._id,
      }));
      setUsers(response.data);
    }).catch(error => {
      console.log('Get users error', error);
      messageApi.error('Lỗi khi tải danh sách người dùng');
    });
  }, []);


  useEffect(() => {
    if (data?._id) {
      form.setFieldsValue({
        ...data,
      });
      setIsEditMode(true);
    }
  }, [data, form]);

  const onFinish = values => {
    const submitData = { ...values };
    if (isEditMode) {
      api
          .updateCalendar(data._id, submitData)
          .then(() => {
            onSuccess?.();
            modal.hide();
          })
          .catch(error => {
            console.log('Add product error', error);
            messageApi.error('Lỗi khi thêm lịch');
          });
      return
    }

    api
        .createCalendarBeauty(submitData)
        .then(() => {
          onSuccess?.();
          modal.hide();
        })
        .catch(() => {
          messageApi.error('Lỗi khi thêm mới lịch hẹn');
        });
  };

  return (
      <Modal
          title={data?._id ? 'Chỉnh sửa đăng ký' : 'Đăng ký lịch hẹn'}
          open={modal.visible}
          onCancel={modal.hide}
          afterClose={modal.remove}
          width={1000}
          footer={[
            <Button key="cancel" onClick={modal.hide}>
              Hủy
            </Button>,
            <Button form="add-form" key="submit" htmlType="submit" type="primary">
              {data?._id ? 'Cập nhật' : 'Thêm'}
            </Button>,
          ]}
      >
        <CustomForm
            id="add-form"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            labelCol={{ span: 4 }}
        >
          <Form.Item
              name="beauty_treatment_id"
              label="Chọn liệu trình"
              rules={[{ required: true, message: 'Vui lòng chọn liệu trình' }]}
              initialValue={data?.beauty_treatment_id}
          >
            <Select allowClear placeholder="Chọn liệu trình" options={beautyTreatments} />
          </Form.Item>

          <Form.Item
              name="user_id"
              label="Khách hàng"
              rules={[{ required: true, message: "Vui lòng chọn khách hàng" }]}
              initialValue={data?.user_id}
          >
            <Select placeholder="Chọn khách hàng" options={users}/>
          </Form.Item>
        </CustomForm>
      </Modal>
  );
});

export default AddCalendarBeauty;
