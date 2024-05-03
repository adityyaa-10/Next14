import SecondCard from "./ui/SecondCard";
import FirstCard from "./ui/FirstCard";
import Link from "next/link";

const App = () => {

  return (
    <section className='bg-[#fafafa] w-full py-4 px-0 sm:px-4 lg:px-0 max-w-[929px] mx-auto'>

      <div className="flex justify-end">
        <Link href={'/form'}>
          <p className="pt-2 pb-6 ml-1 font-medium text-[#0066FF] tracking-[0.01em] text-[16.5px] leading-6">
            Create a Post
          </p>
        </Link>
      </div>

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