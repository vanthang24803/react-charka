import { Billboard } from "@/components/billboard";
import { Seo } from "@/components/seo";

function HomePage() {
  return (
    <>
      <Seo
        title="The Sill | Buy Plants Online"
        description="Easy-care indoor plants, pots & planters, plant care accessories, and more delivered to your door. Free Shipping. 30-Day Guarantee."
      />
      <Billboard
        primaryUrl="/"
        secondaryUrl="/"
        title="Spring is Blooming!"
        description="We’re swooning over our latest collections."
        primary="Shop Online"
        secondary="Find A Store"
        thumbnail="https://cdn.sanity.io/images/y346iw48/production/65781b293fc831046bb03c8f0d00b0115d267525-1216x903.png?w=1536&h=1141&auto=format"
      />
    </>
  );
}

export default HomePage;
