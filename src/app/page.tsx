import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-serif text-xl font-bold">
            <span className="text-primary">Ariadne</span>
            <span className="text-muted-foreground">Studio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#lessons"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Lessons
            </Link>
            <Link
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#signup">Book a Lesson</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={`https://picsum.photos/1600/800`}
              // src="/placeholder.svg?height=800&width=1600"
              alt="Artist painting"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center md:py-32">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">
              Discover the Artist Within
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
              Professional artist offering personalized art lessons for all
              skill levels. Transform your creativity through expert guidance
              and inspiration.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#signup">
                  Book a Lesson <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`https://picsum.photos/600/600`}
                  // src="/placeholder.svg?height=600&width=600"
                  alt="Artist portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                  About the Artist
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  With over 15 years of experience in various artistic mediums,
                  I&apos;ve dedicated my life to creating and teaching art. My
                  work has been featured in galleries across the country, and
                  I&apos;ve helped hundreds of students discover their unique
                  artistic voice.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  My teaching philosophy centers on personalized instruction
                  that adapts to your learning style and goals. Whether
                  you&apos;re a complete beginner or looking to refine advanced
                  techniques, my lessons will help you grow as an artist.
                </p>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="#contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Gallery
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Browse through a selection of my artwork spanning various styles
                and techniques.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/images/gallery-${item}.jpg?text=Artwork ${item}`}
                    alt={`Artwork ${item}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* uncomment for text hover effect */}
                  {/* <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white font-medium">View Artwork</span>
                  </div> */}
                </div>
              ))}
            </div>
            {/* <div className="mt-12 flex justify-center">
              //  if we decide to add a full gallery page later on
              <Button variant="outline">View Full Collection</Button>
            </div> */}
          </div>
        </section>

        {/* Lessons Section */}
        <section id="lessons" className="bg-muted/50 py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Art Lessons
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Personalized instruction tailored to your skill level and
                artistic goals.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    Private Lessons
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    One-on-one instruction focused entirely on your needs and
                    goals. Perfect for rapid improvement.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Personalized curriculum</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Materials list provided</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="#signup">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    Group Workshops
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn alongside others in a collaborative environment. Great
                    for social learners.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Small class sizes (max 4)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Weekly sessions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Materials list provided</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="#signup">Join a Group</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    Online Lessons
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn from anywhere with virtual instruction. Convenient and
                    effective.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Live video instruction</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Materials list provided</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="#signup">Schedule Online</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Student Testimonials
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Hear what my students have to say about their learning
                experience.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  quote:
                    "The private lessons transformed my approach to painting. I&apos;ve learned techniques I never thought I could master!",
                },
                {
                  name: "Michael Chen",
                  quote:
                    "The group workshops are both fun and educational. I&apos;ve made great friends while improving my artistic skills.",
                },
                {
                  name: "Emma Williams",
                  quote:
                    "Even through online lessons, the instruction is clear and helpful. I&apos;ve made tremendous progress in just a few months.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={`https://picsum.photos/100/100`}
                          // src={`/placeholder.svg?height=100&width=100&text=${testimonial.name.charAt(
                          //   0
                          // )}`}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="mt-4 font-medium">{testimonial.name}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {`"${testimonial.quote}"`}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <section
          id="signup"
          className="bg-primary text-primary-foreground py-16 md:py-24"
        >
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to Begin Your Artistic Journey?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  Fill out the form to book a lesson or inquire about
                  availability. I&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <span>artist@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>123 Art Studio Lane, Creativity City</span>
                  </div>
                </div>
              </div>
              {/* <div className="bg-background text-foreground rounded-lg p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lesson-type"
                      className="text-sm font-medium"
                    >
                      Lesson Type
                    </label>
                    <select
                      id="lesson-type"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a lesson type</option>
                      <option value="private">Private Lessons</option>
                      <option value="group">Group Workshops</option>
                      <option value="online">Online Lessons</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      rows={4}
                      placeholder="Tell me about your experience level and goals"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </div> */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Visit the Studio
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Come see where the magic happens and discuss your artistic
                journey in person.
              </p>
              <div className="mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Studio Map"
                  alt="Studio location map"
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href="#signup">
                    Book a Lesson <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:5551234567">Call the Studio</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-serif text-xl font-bold">
            <span className="text-primary">Ariadne</span>
            <span className="text-muted-foreground">Studio</span>
          </div>
          <nav className="flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#lessons"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Lessons
            </Link>
            <Link
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ariadne Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
