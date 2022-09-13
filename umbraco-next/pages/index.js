import Entity from "../components/Entity";
import { getByUrl } from "../lib/enterspeed";

export async function getServerSideProps({ preview }) {
  const data = await getByUrl(encodeURIComponent("/"), preview);

  return {
    props: {
      view: data,
      preview: preview || null,
    },
  };
}

const Index = ({ view }) => {
  return <Entity view={view} />;
};

export default Index;
