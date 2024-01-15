// import MainLayout from "./components/layout/MainLayout";
import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal((prev) => !prev);
  };
  const handleCloseModal = () => {
    setModal((prev) => !prev);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (true) {
      handleCloseModal();
    }
  };
  return (
    <Container>
      {/* <MainLayout /> */}
      <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
        <h1>This is Home</h1>
        <div className="flex flex-col items-center space-y-2 border border-purple-700 p-10 size-64">
          <Button className={"w-full"} onClick={handleOpenModal}>
            Open Modal
          </Button>
          <Modal isOpen={modal} onClose={handleCloseModal}>
            <Modal.Header>
              <h2>This Modal header</h2>
              <Modal.CloseButton />
            </Modal.Header>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id=""
                className="border-2 rounded"
              />
              <button type="submit">Submit</button>
            </form>
          </Modal>
        </div>
      </div>
    </Container>
  );
}

export default App;
