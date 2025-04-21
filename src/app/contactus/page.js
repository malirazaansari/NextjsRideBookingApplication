import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function ContactPage() {
    return (
        <>
        <Header />
        <NavBar />
        <PageHero
        title="CONTACT US"
        breadcrumb="Contact"
        bgImage="/pagebanner.jpg"
      />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Text Section */}
          <div>
            <h2 className="text-lg font-semibold text-[color:var(--color-foreground)] mb-1">
              BUSINESS ENQUIRY
            </h2>
            <div className="w-24 border-b-2 border-dotted border-[color:var(--color-primary)] mb-6" />

            <p className="text-sm text-gray-700 mb-4">
              That this group would somehow form a family that is the way we all became the brady bunch baby.
            </p>
            <p className="text-sm text-gray-700">
              Got kind of tired packin' and unpackin' – town to town and up and down the dial. Movin' on up to the east side. We finally got a piece of the pie.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="YOUR NAME" className="input-field" />
              <input type="email" placeholder="E-MAIL ADDRESS" className="input-field" />
              <input type="text" placeholder="PHONE" className="input-field" />
              <input type="text" placeholder="SUBJECT" className="input-field" />
            </div>
            <textarea
              placeholder="MESSAGE:"
              rows={6}
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-accent)] text-white font-semibold text-sm px-6 py-2 rounded"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </main>
      <Footer />
      </>
    );
  }
