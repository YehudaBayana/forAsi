import { Modal, Switch, Button, Card } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import './sidebar.css';
import Input from '../input/Input.jsx';

const SideBar = () => {
  let [state, setState] = useState({
    modal1Visible: false,
    modal2Visible: false,
  });

  function setModal2Visible(modal2Visible) {
    setState({ modal2Visible });
  }

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <>
      <div className='wrapper'>
        <div className='sb-container'>
          <h2>swap token</h2>
          <div className='element-wrapper'>
            <Input type='primary' handleClick={() => setModal2Visible(true)} />
            <Modal
              title='Vertically centered modal dialog'
              centered
              visible={state.modal2Visible}
              onOk={() => setModal2Visible(false)}
              onCancel={() => setModal2Visible(false)}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <i class='fas fa-exchange-alt'></i>
          </div>
          <div className='element-wrapper'>
            <Input type='primary' handleClick={() => setModal2Visible(true)} />
            <Modal
              title='Vertically centered modal dialog'
              centered
              visible={state.modal2Visible}
              onOk={() => setModal2Visible(false)}
              onCancel={() => setModal2Visible(false)}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
          </div>
          <div className='element-wrapper'>
            <Switch defaultChecked onChange={onChange} />
          </div>
          <div className='element-wrapper'>
            <Button type='primary' size='large' shape='round'>
              Primary
            </Button>
          </div>
          <div className='element-wrapper'>
            <Card style={{ width: 300 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Card content</p>
                <span>dsfklask</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Card content</p>
                <span>dsfklask</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Card content</p>
                <span>dsfklask</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
