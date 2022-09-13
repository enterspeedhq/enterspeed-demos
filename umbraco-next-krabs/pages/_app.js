import MainLayout from "components/layouts/MainLayout";
import tenantDetails from "utils/tenantDetails";
import { getByHandle } from "/lib/enterspeed";

const App = ({ Component, pageProps, navigation }) => {
  const tenant = {
    ...tenantDetails[pageProps.tenant],
    name: pageProps.tenant,
  };
  return (
    <>
      <MainLayout tenant={tenant} navigation={navigation}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const tenant = ctx?.req?.tenant?.name;
  const enterspeedDomain = ctx?.req?.tenant?.enterspeedDomain;

  let pageProps = {};
  const navigation = await getByHandle(
    `navigation-${enterspeedDomain}/`,
    tenant
  );

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps: { ...pageProps, tenant, enterspeedDomain }, navigation };
};

export default App;
