import logo from "@/assets/logo.png";
import heroImg from "@/assets/banner-hero.jpg";
import aiImg from "@/assets/banner-ai.jpg";
import nurseryImg from "@/assets/banner-nursery.jpg";
import certImg from "@/assets/banner-certificate.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const banners = [
  { img: aiImg, title: "AI-Powered Learning", desc: "Chatbot, Story & Quiz Generators plus AI Voice Instructors (Shin Chan, Doraemon)." },
  { img: nurseryImg, title: "Nursery to Grade 5", desc: "Structured courses across all subjects, age 3 to 11." },
  { img: certImg, title: "Certificates on Completion", desc: "Earn an official certificate when you reach 100% course progress." },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary">
        <div className="container flex items-center justify-between py-4">
          <img src={logo} alt="Dream Learn — Learn Towards Success" className="h-12 md:h-14 w-auto" />
          <nav className="hidden md:flex gap-6 text-primary-foreground/90 text-sm font-medium">
            <a href="#about" className="hover:text-secondary">About</a>
            <a href="#courses" className="hover:text-secondary">Courses</a>
            <a href="#ai" className="hover:text-secondary">AI Tools</a>
            <a href="#pricing" className="hover:text-secondary">Pricing</a>
          </nav>
          <Button variant="secondary" className="font-semibold">Get Started</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative" style={{ background: "var(--gradient-hero)" }}>
        <div className="container grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Dream Learn <span className="text-secondary">Education Platform</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              AI-powered learning for Nursery to Grade 5. Live classes, video lessons, interactive quizzes, and certificates.
            </p>
            <div className="mt-8 flex gap-4">
              <Button variant="secondary" size="lg" className="font-semibold">Start Free Trial</Button>
              <Button variant="outline" size="lg" className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">Explore Courses</Button>
            </div>
          </div>
          <img src={heroImg} alt="Children learning with tablets" width={1600} height={900} className="rounded-2xl shadow-2xl w-full h-auto" />
        </div>
      </section>

      {/* Banners */}
      <section id="ai" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">A Learning Experience Like No Other</h2>
        <p className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
          Everything kids need to thrive — combined with AI tools, voice instructors and progress tracking.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {banners.map((b) => (
            <Card key={b.title} className="overflow-hidden border-border hover:shadow-xl transition-shadow">
              <img src={b.img} alt={b.title} loading="lazy" width={1200} height={800} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{b.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{b.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-muted py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <img src={logo} alt="Dream Learn logo" className="mx-auto max-w-sm w-full bg-primary p-8 rounded-2xl" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">About Dream Learn</h2>
            <p className="mt-4 text-muted-foreground">
              An online education platform offering AI-powered learning tools, structured courses from nursery to grade 5,
              video streaming, interactive content, and multi-role user management with payment integration.
            </p>
            <ul className="mt-6 space-y-2 text-foreground">
              <li><strong>Founder & CEO:</strong> Arumugasamy G</li>
              <li><strong>Contact:</strong> +91 9944656602</li>
              <li><strong>Website:</strong> www.dreamlearn-education.com</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={logo} alt="Dream Learn" className="h-10 w-auto" />
          <p className="text-sm text-primary-foreground/70">© {new Date().getFullYear()} Dream Learn Education Platform. Learn Towards Success.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
