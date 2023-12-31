import Layout from '@components/Layout';
import ProductItem from '@components/ProductItem';
import data from '@utils/data';

export default function Home() {
  return (
    <Layout>
      <p>TEST</p>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => {
          return <ProductItem product={product} key={product.slug} />;
        })}
      </div>
    </Layout>
  );
}
