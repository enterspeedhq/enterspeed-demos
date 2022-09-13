import { Home, ContentPage, Product, Products } from "./entities";

const entities = {
  home: Home,
  contentPage: ContentPage,
  product: Product,
  products: Products,
};

export default function Entity({ view }) {
  const Container = entities[view?.type];

  return <Container view={view} />;
}
