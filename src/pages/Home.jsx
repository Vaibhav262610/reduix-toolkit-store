import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="flex pt-10 flex-col  items-center">
        <h1 className="text-2xl font-bold mt-12">Welcome to Redux Toolkt Store</h1>
        <Products />
      </div>
    </>
  );
};

export default Home;
