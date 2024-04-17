import Card from "../ui/Cards/Card"
import Sidebar from "../ui/SideNavbar"
const Home = () => {
    return (

        <div>
            <div className='float-left '>
                <Sidebar />
            </div>
            <div className="p-4 sm:ml-64 ml-5">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap ">
                            <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <Card />
                            </div>
                            <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <Card />
                            </div>
                            <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <Card />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
