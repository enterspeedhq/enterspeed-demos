import Error from "next/error";
import { getByUrl } from "/lib/enterspeed";
import Entity from "components/Entity";

export async function getServerSideProps(context) {
  const tenant = context?.req?.tenant?.name;
  const domain = context?.req?.tenant?.enterspeedDomain;
  const slug = context?.req?.url;

  const data = await getByUrl(encodeURIComponent(domain + slug), tenant);

  let notFound = false;

  if (data.status === 404) {
    context.res.statusCode = 404;
    notFound = true;
  }

  return {
    props: {
      view: data,
      notFound,
    },
  };
}

const Content = ({ view, notFound }) => {
  if (notFound) {
    return <Error statusCode={404} />;
  }
  return <Entity view={view} />;
};

export default Content;
