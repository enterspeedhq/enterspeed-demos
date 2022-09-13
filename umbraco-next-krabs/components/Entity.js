import { Home, Beers, Beer, Page } from "./entities";

const entities = {
  home: Home,
  beers: Beers,
  beer: Beer,
  page: Page,
};

const Entity = ({ view }) => {
  const Container = entities[view?.type];

  return <Container view={view} />;
};

export default Entity;
