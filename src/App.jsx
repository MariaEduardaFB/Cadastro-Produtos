import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProductModal from '../src/components/FormModal'; // Importar o componente do modal

function App() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <section className='section-main'>
        <div className='cad-div'>
          <h1>Cadastro de Produtos</h1>
          <Button 
            className='cad-button'
            style={{background: '#2EA424'}} 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={showModal}>
              Cadastrar
          </Button>
          <ProductModal
            open={open}
            confirmLoading={confirmLoading}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </div>
      </section>
    </>
  );
}

export default App;
