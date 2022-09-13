import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "../../components/entities";
import { getByUrl } from "../../lib/enterspeed";
import { checkPreviewSessionStorage } from "../../helpers/previewSessionStorage";
import Error from "next/error";

export default function ProductRoute() {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const preview = checkPreviewSessionStorage();

  useEffect(() => {
    const getProduct = async () => {
      const data = await getByUrl(
        encodeURIComponent(`/products/${slug}/`),
        preview
      );

      setProduct(data);
      setLoading(false);
    };

    getProduct();
  }, [slug, preview]);

  if (loading) {
    return null;
  }

  if (product.status === 404) {
    return <Error statusCode={404} />;
  }

  return <Product product={product} />;
}
