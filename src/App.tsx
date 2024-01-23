// import MainLayout from "./components/layout/MainLayout";
// import { FormEvent, useState } from "react";
// import Button from "./components/ui/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  FormSection,
  FormSubmit,
  Input,
  ReusableForm,
} from "./components/ReusableForm";
import Container from "./components/ui/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TReUsableFormType,
  reUsableFormSchema,
} from "./components/ReusableForm/reusableFormValidate";
// import { TReusableFormTypes } from "./types";
// import Modal from "./components/ui/Modal";
// import Form from "./components/ui/Form";

function App() {
  // Reusable Form Operation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TReUsableFormType>({ resolver: zodResolver(reUsableFormSchema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  //Modal operation
  // const [modal, setModal] = useState(false);
  // const handleOpenModal = () => {
  //   setModal((prev) => !prev);
  // };
  // const handleCloseModal = () => {
  //   setModal((prev) => !prev);
  // };
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   handleCloseModal();
  // };
  return (
    <Container>
      {/* <MainLayout /> */}
      {/* <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
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
      </div> */}
      {/* <Form /> */}
      <ReusableForm
        double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <Input
            label={"Name"}
            id={"name"}
            type={"text"}
            register={register("name")}
            errors={errors}
          />
          <Input
            label={"Email"}
            id={"email"}
            type={"email"}
            register={register("email")}
            errors={errors}
          />
          <Input
            label={"Password"}
            id={"password"}
            type={"password"}
            register={register("password")}
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </ReusableForm>
    </Container>
  );
}

export default App;
