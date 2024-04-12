import Banner from "../../components/Banner/Banner";
import BestDealsForSale from "../../components/BestDealsForSale/BestDealsForSale";
import Sidebar from "../../components/Sidebar/Sidebar";


const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 ">
      <div className="lg:col-span-2">
        <Sidebar />
      </div>
      <div className="mt-5 lg:col-span-5 space-y-20 ">
        <Banner />

        <BestDealsForSale/>

      </div>
    </div>
    // <div className="flex gap-4">
    //   <div className="">
    //     <Sidebar />
    //   </div>
    //   <div className="mt-3 flex-grow">
    //     <Banner />
    //   </div>
    // </div>
  );
}

Home.propTypes = {}

export default Home