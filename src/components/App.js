import React from "react";
import './../styles/App.css';


const App = () => {
  const [show, setShow] = useState(false);

  function openModal(){
    setShowModal(true);
  };

  function closeModal(){
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal show={show} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  )
}

export default App
