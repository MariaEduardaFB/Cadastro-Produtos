import React from 'react';
import { Modal, Form, Input, Radio, Button, InputNumber } from 'antd';

const ProductModal = ({ open, confirmLoading, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Cadastro de Produto"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      centered
      width={600}
      footer={[
        <Button key="back" onClick={handleCancel} danger ghost>
          Cancelar
        </Button>,
        <Button 
          key="submit"
          type="primary" 
          loading={confirmLoading} 
          onClick={handleOk}
          style={{ background: '#2EA424' }}>
          Cadastrar
        </Button>,
      ]}
    >
      <Form
        layout="vertical"
        name="productForm"
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Nome do Produto"
          name="productName"
          rules={[{ required: true, message: 'Por favor, insira o nome do produto!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Descrição"
          name="description"
          rules={[{ required: true, message: 'Por favor, insira a descrição do produto!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Preço"
          name="price"
          rules={[{ required: true, message: 'Por favor, insira o preço do produto!' }]}
        >
          <InputNumber
            className="ant-input"
            style={{ width: '100%' }}
            min={0}
            formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            parser={value => value.replace(/\R\$\s?|(,*)/g, '')}
          />
        </Form.Item>

        <Form.Item label="Disponível para a venda?">
          <Radio.Group>
            <Radio value="sim"> Sim </Radio>
            <Radio value="nao"> Não </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductModal;
