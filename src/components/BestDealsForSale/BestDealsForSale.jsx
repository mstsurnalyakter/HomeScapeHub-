import useContextData from "../../hooks/useContextData";


const BestDealsForSale = () => {
    const {data,dataLoading} = useContextData()
  return (
    <div>
      <h2>Best Deals for Sale</h2>
    </div>
  );
}

export default BestDealsForSale