import Link from "next/link";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

// Function to generate static paths for the dynamic route
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  }

  return {
    title: "Projects | Kyle Levy",
    description:
      "",
  };
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
    <Heading className="font-black mb-2 pb-1"> {product.title}</Heading>
    <div className="mb-6 text-sm text-secondary dark:text-darkSecondary">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {" > "}
      <Link href="/projects" className="hover:underline">
        Projects
      </Link>
      {" > "}
      <span>{product.title}</span>
    </div>

    <SingleProduct product={product} />
  </Container>
  );
}
