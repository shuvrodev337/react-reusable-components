// import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      {/* <MainLayout /> */}
      <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
        <h1>This is Home</h1>
        <div className="flex flex-col items-center space-y-2 border border-purple-700 p-10 size-64">
          <Button variant="" className={"w-full"}>
            Solid
          </Button>
          <Button variant="outline" className={"w-1/2"}>
            Outline
          </Button>
          <Button variant="ghost" className={"w-9/12"}>
            Ghost
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
