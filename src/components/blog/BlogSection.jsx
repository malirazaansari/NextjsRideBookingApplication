import BlogCard from "./BlogCard";

export default function BlogSection() {
  const posts = [
    {
      image: "/testimonial.jpg",
      mediaType: "image",
      author: "Admin",
      date: "22 Aug 2015",
      comments: 14,
      tags: ["Cab", "Taxi", "Rent", "Hire", "Trip"],
      title: "WELL TRAINED DRIVERS ON DUTY",
      excerpt:
        "Fleeing from the Cylon tyranny the last Battlestar leads a rag tag fugitive fleet on a lonely quest a",
    },
    {
      image: "/blog-2.jpg",
      mediaType: "video",
      author: "Admin",
      date: "14 Sep 2015",
      comments: 22,
      tags: ["Pickup", "Airport", "Paid"],
      title: "GOT THE AIRPORT SHUTTLE CONTRACT",
      excerpt:
        "Fleeing from the Cylon tyranny the last Battlestar leads a rag tag fugitive fleet on a lonely quest a",
    },
    {
      image: "/blog-3.jpg",
      mediaType: "image",
      author: "Admin",
      date: "30 Oct 2015",
      comments: 16,
      tags: ["City", "Service", "Taxi", "Cab"],
      title: "WHY SHOULD COMPANIES OFFER TAXI",
      excerpt:
        "Fleeing from the Cylon tyranny the last Battlestar leads a rag tag fugitive fleet on a lonely quest a",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mb-12 text-center">
        <h2 className="font-semibold text-[color:var(--color-foreground)] text-lg tracking-wide">
          RECENT UPDATES FROM OUR BLOG
        </h2>
        <div className="mx-auto mt-2 border-[color:var(--color-primary)] border-b-2 border-dotted w-24 h-1" />
      </div>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-6 max-w-7xl">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}
