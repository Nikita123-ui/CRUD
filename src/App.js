import { useState } from 'react';

import Accordion from './Accordion/Accordion';
import './App.css';
import BreadBox from './breadbox/breadbox';
import Button from './Button/Button';
import Crud from './CRUD/Crud';
import Icon from './Icon/Icon';
//import Stepper from './Stepper/Stepper';
import Toast from './Toast/toast';
function App() {
  const [showNotification, setShowNotification] = useState(false);
  const [active, setActive] = useState(false);

  const toastOpenHandler = () => {
    setShowNotification(true);
    setActive(true);
  };

  const hideNotification = () => {
    setShowNotification(false);
    setTimeout(() => {
      setActive(false);
    }, 700);
  };
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Toast Notification</h1>
      {active ? (
        <>
          <Toast
            variant="success"
            showClose={true}
            hideToast={hideNotification}
            className={showNotification ? 'top-bottom' : 'bottom-top'}
          >
            A Successful Toast
          </Toast>
          {/* <Toast variant="info" showClose={true}>
            An Informational Toast
          </Toast>
          <Toast variant="warning" showClose={true}>
            A Warning Toast
          </Toast>
          <Toast variant="danger" showClose={true}>
            A Destructive Toast
          </Toast> */}
        </>
      ) : (
        ''
      )}

      <div className="toastBar">
        <button className="toastBarBtn" onClick={() => toastOpenHandler()}>
          ToastOpen
        </button>
      </div>
      <>
        <h1 style={{ textAlign: 'center' }}>CRUD App</h1>
        <Crud />

        <h1 style={{ textAlign: 'center' }}>Buttons</h1>
        <div className="buttonContainer">
          <Button variant="primary" size="sm">
            <Icon name="fa-solid fa-circle-info" /> small
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="fa-solid fa-circle-info" /> small
          </Button>
          <Button
            variant="shadedBtn"
            size="sm"
            buttonRound="circle"
            buttonShape="semiRound"
          >
            small
          </Button>
          <Button variant="shadedBtn" size="sm" buttonShape="circle">
            <Icon name="fa-solid fa-circle-info" />
          </Button>
        </div>
        <div className="buttonContainer">
          <Button variant="primary" size="md">
            <Icon name="fa-solid fa-circle-info" /> Medium
          </Button>
          <Button variant="outline" size="md">
            <Icon name="fa-solid fa-circle-info" /> Medium
          </Button>
          <Button
            variant="shadedBtn"
            size="md"
            buttonRound="circle"
            buttonShape="semiRound"
          >
            Medium
          </Button>
          <Button variant="shadedBtn" size="md" buttonShape="circle">
            <Icon name="fa-solid fa-circle-info" />
          </Button>
        </div>
        <div className="buttonContainer">
          <Button variant="primary" size="lg">
            <Icon name="fa-solid fa-circle-info" /> large
          </Button>
          <Button variant="outline" size="lg">
            <Icon name="fa-solid fa-circle-info" /> large
          </Button>
          <Button
            variant="shadedBtn"
            size="lg"
            buttonRound="circle"
            buttonShape="semiRound"
          >
            large
          </Button>
          <Button variant="shadedBtn" size="lg" buttonShape="circle">
            <Icon name="fa-solid fa-circle-info" />
          </Button>
        </div>
        <div className="buttonContainer">
          <Button variant="primary" size="md">
            Button
          </Button>
          <Button variant="primary" size="md">
            <Icon name="fa fa-pencil" />
            Create
          </Button>
          <Button variant="primary" size="md">
            <Icon name="fa fa-download" />
            Download
          </Button>
        </div>
        <div className="buttonContainer">
          <Button variant="primary" size="md">
            <Icon name="fa fa-spinner" />
          </Button>
          <Button variant="primary" size="md">
            Logout
            <Icon name="fa fa-sign-out" />
          </Button>
          <Button variant="primary" size="md">
            <Icon name="fa fa-file" /> Export file and list
            <Icon name="fa fa-angle-down" />
          </Button>
          <Button variant="primary" size="md" disabled>
            Disabled
          </Button>
        </div>
      </>
      <BreadBox />
      <Accordion />
      {/* <Stepper /> */}
    </div>
  );
}

export default App;
