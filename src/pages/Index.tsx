import { Link } from "react-router-dom";
import { Bot, BookOpen, Mic, Sparkles, Check, Play, GraduationCap } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/banner-hero.jpg";
import aiImg from "@/assets/banner-ai.jpg";
import nurseryImg from "@/assets/banner-nursery.jpg";
import certImg from "@/assets/banner-certificate.jpg";
import cNursery from "@/assets/course-nursery.jpg";
import cLkg from "@/assets/course-lkg.jpg";
import cUkg from "@/assets/course-ukg.jpg";
import cG1 from "@/assets/course-g1.jpg";
import cG2 from "@/assets/course-g2.jpg";
import cG3 from "@/assets/course-g3.jpg";
import cG4 from "@/assets/course-g4.jpg";
import cG5 from "@/assets/course-g5.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const banners = [
  { img: aiImg, title: "AI-Powered Learning", desc: "Chatbot, Story & Quiz Generators plus AI Voice Instructors (Shin Chan, Doraemon)." },
  { img: nurseryImg, title: "Nursery to Grade 5", desc: "Structured courses across all subjects, age 3 to 11." },
  { img: certImg, title: "Certificates on Completion", desc: "Earn an official certificate when you reach 100% course progress." },
];

const DEMO_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBigBuckBunny.mp4";

const courses = [
  { grade: "Nursery", age: "3-4 yrs", img: cNursery, subjects: ["Alphabet Play", "Number Fun", "Rhymes"], video: DEMO_VIDEO },
  { grade: "LKG", age: "4-5 yrs", img: cLkg, subjects: ["Phonics", "Counting 1-50", "Shapes & Colors"], video: DEMO_VIDEO },
  { grade: "UKG", age: "5-6 yrs", img: cUkg, subjects: ["Reading", "Basic Math", "EVS Intro"], video: DEMO_VIDEO },
  { grade: "Grade 1", age: "6-7 yrs", img: cG1, subjects: ["English", "Maths", "EVS"], video: DEMO_VIDEO },
  { grade: "Grade 2", age: "7-8 yrs", img: cG2, subjects: ["English", "Maths", "Science"], video: DEMO_VIDEO },
  { grade: "Grade 3", age: "8-9 yrs", img: cG3, subjects: ["English", "Maths", "Science", "Social"], video: DEMO_VIDEO },
  { grade: "Grade 4", age: "9-10 yrs", img: cG4, subjects: ["English", "Maths", "Science", "Social"], video: DEMO_VIDEO },
  { grade: "Grade 5", age: "10-11 yrs", img: cG5, subjects: ["English", "Maths", "Science", "Social", "Computers"], video: DEMO_VIDEO },
];

const aiTools = [
  { icon: Bot, title: "AI Chatbot", desc: "24/7 doubt-clearing assistant trained on your child's curriculum.", cta: "Try Chatbot" },
  { icon: Sparkles, title: "Story Generator", desc: "Generates age-appropriate illustrated stories on any topic.", cta: "Generate Story" },
  { icon: BookOpen, title: "Quiz Generator", desc: "Creates instant quizzes from any lesson with auto-grading.", cta: "Make a Quiz" },
  { icon: Mic, title: "AI Voice Instructor", desc: "Friendly characters (Shin Chan, Doraemon) read & teach lessons aloud.", cta: "Hear a Demo" },
];

const plans = [
  { name: "Free Trial", price: "₹0", period: "7 days", features: ["Access to 3 sample courses", "Limited AI Chatbot", "No certificate"], cta: "Start Free", highlight: false },
  { name: "Monthly", price: "₹199", period: "/month", features: ["Full course access", "AI Chatbot & Quiz Generator", "Progress tracking"], cta: "Choose Monthly", highlight: false },
  { name: "Quarterly", price: "₹399", period: "/3 months", features: ["Everything in Monthly", "Story Generator", "Downloadable worksheets"], cta: "Choose Quarterly", highlight: true },
  { name: "Yearly", price: "₹1999", period: "/year", features: ["Everything in Quarterly", "AI Voice Instructors", "Completion Certificate", "Priority support"], cta: "Go Yearly", highlight: false },
];

const CourseCard = ({ c }: { c: (typeof courses)[number] }) => (
  <Card className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
    <img src={c.img} alt={`${c.grade} course`} loading="lazy" width={1024} height={640} className="w-full h-44 object-cover" />
    <div className="p-5 flex-1 flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary">{c.grade}</h3>
        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-semibold">{c.age}</span>
      </div>
      <ul className="mt-3 text-sm text-muted-foreground space-y-1 flex-1">
        {c.subjects.map((s) => (
          <li key={s} className="flex items-center gap-2"><Check className="w-3 h-3 text-secondary" /> {s}</li>
        ))}
      </ul>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4 w-full" variant="default"><Play className="w-4 h-4" /> Watch Demo</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{c.grade} — Demo Lesson</DialogTitle>
          </DialogHeader>
          <video src={c.video} controls autoPlay className="w-full rounded-md" />
        </DialogContent>
      </Dialog>
    </div>
  </Card>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary sticky top-0 z-40">
        <div className="container flex items-center justify-between py-3">
          <img src={logo} alt="Dream Learn — Learn Towards Success" className="h-12 md:h-14 w-auto" />
          <nav className="hidden md:flex gap-6 text-primary-foreground/90 text-sm font-medium">
            <a href="#about" className="hover:text-secondary">About</a>
            <a href="#courses" className="hover:text-secondary">Courses</a>
            <a href="#ai" className="hover:text-secondary">AI Tools</a>
            <a href="#pricing" className="hover:text-secondary">Pricing</a>
          </nav>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild variant="secondary" className="font-semibold">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
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
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg" className="font-semibold">
                <Link to="/signup">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link to="/login">Login</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">For Students & Faculty • No credit card required</p>
          </div>
          <img src={heroImg} alt="Children learning with tablets" width={1600} height={900} className="rounded-2xl shadow-2xl w-full h-auto" />
        </div>
      </section>

      {/* Feature Banners */}
      <section className="container py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">A Learning Experience Like No Other</h2>
        <p className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
          Everything kids need to thrive — combined with AI tools, voice instructors and progress tracking.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {banners.map((b) => (
            <Card key={b.title} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img src={b.img} alt={b.title} loading="lazy" width={1200} height={800} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{b.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{b.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <GraduationCap className="w-10 h-10 mx-auto text-secondary" />
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-primary">Courses by Grade</h2>
            <p className="text-muted-foreground mt-3">
              Structured curriculum from Nursery through Grade 5 — each with a free demo lesson you can watch right now.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {courses.map((c) => (
              <CourseCard key={c.grade} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section id="ai" className="container py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Sparkles className="w-10 h-10 mx-auto text-secondary" />
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-primary">Powerful AI Tools</h2>
          <p className="text-muted-foreground mt-3">
            Built-in AI assistants that make learning interactive, personalized and fun.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {aiTools.map((t) => (
            <Card key={t.title} className="p-6 hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                <t.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary mt-4">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{t.desc}</p>
              <Button asChild variant="secondary" className="mt-5 font-semibold">
                <Link to="/signup">{t.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Simple, Affordable Pricing</h2>
            <p className="text-muted-foreground mt-3">
              Start free, upgrade anytime. Cancel whenever you want.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {plans.map((p) => (
              <Card key={p.name} className={`p-6 flex flex-col ${p.highlight ? "border-secondary border-2 shadow-xl scale-[1.02]" : ""}`}>
                {p.highlight && (
                  <span className="self-start text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-semibold mb-2">Most Popular</span>
                )}
                <h3 className="text-xl font-semibold text-primary">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" /> {f}</li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant={p.highlight ? "secondary" : "default"}>
                  <Link to="/signup">{p.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
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
            <div className="mt-6 flex gap-3">
              <Button asChild variant="secondary"><Link to="/signup">Get Started</Link></Button>
              <Button asChild variant="outline"><Link to="/login">Login</Link></Button>
            </div>
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
