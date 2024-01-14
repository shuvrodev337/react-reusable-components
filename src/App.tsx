// import MainLayout from "./components/layout/MainLayout";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      {/* <MainLayout /> */}
      <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
        <h1>This is Home</h1>
        <div className="flex flex-col space-y-2 ">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-success">Primary</button>
          <button className="btn btn-red">Primary</button>
        </div>
      </div>
    </Container>
  );
}

export default App;
