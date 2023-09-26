// import Counter from "./components/counter";
import Navbar from "./components/navbar";
import ViewSection from "./components/viewsection";
import Card from "./components/card";
import Tasks from "./taskdata";

function App() {
  return (
    <>
      <Navbar />
    <div className="container p-8 m-10 mx-auto bg-gray-200 border shadow rounded-xl">
      <p className="mb-5 text-3xl font-bold text-gray-700">
        Welcome!
      </p>
      <p className="text-lg text-gray-500">
        To-Do tasks in action
      </p>
      </div>
      <div className="mx-48 mt-10">
        <h1 className="text-4xl">All task</h1>
        <ViewSection/>
        <div className="flex flex-wrap justify-center gap-6 card_container mt-14">
          {
            // eslint-disable-next-line array-callback-return
            Tasks.map(v => {
              if (!v.deleted) {
                return <Card key={v.id} data={v} />
              }

            })
          }
        </div>
      </div>
      {/* <Counter /> */}
    </>
  );
}

export default App;
