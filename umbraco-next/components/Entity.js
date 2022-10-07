import { Home, ContentPage, Product, Products, Blog, Post } from "./entities";

const entities = {
  home: Home,
  contentPage: ContentPage,
  product: Product,
  products: Products,
  blog: Blog,
  post: Post
};

export default function Entity({ view }) {
  const Container = entities[view?.type];

  return <Container view={view} />;
}
