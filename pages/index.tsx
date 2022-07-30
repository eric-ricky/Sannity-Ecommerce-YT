import type { GetServerSideProps } from "next";
import {
  FooterBanner,
  HeroBanner,
  Product as ProductComponent,
} from "../components";
import { client } from "../lib/client";
import { Banner, Product } from "../types";
// import styles from "../styles/Home.module.css";

interface IHome {
  products: Product[];
  bannerData: Banner[];
}

const Home: React.FC<IHome> = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]} />

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product, i) => (
          <ProductComponent key={i} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData[0]} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
