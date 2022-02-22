import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
