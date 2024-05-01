import SecondCard from "./ui/SecondCard";
import FirstCard from "./ui/FirstCard";

const App = () => {

  return (
    <section className='bg-[#fafafa] w-full py-4 px-0 sm:px-4 lg:px-0'>

      <div>
        <FirstCard />
      </div>


      <div className="py-4">
        <SecondCard />
      </div>
    </section>
  );
};

export default App;