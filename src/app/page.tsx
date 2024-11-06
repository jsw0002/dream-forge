import BusinessIdeaSection from "@/components/business-plan-section";
import BlogSection from "@/components/blog-section";
import CryptoSection from "@/components/crypto-section";
import ThreeDPrintingSection from "@/components/three-d-printing-section";

const Home = () => {
  return (
    <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Welcome to the Dream Forge
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        This is a work in progress but currently there are several projects to
        check out.
      </p>
      <div className="mt-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <BusinessIdeaSection />
        <BlogSection />
        <ThreeDPrintingSection />
        <CryptoSection />
      </div>
    </section>
  );
};

export default Home;
