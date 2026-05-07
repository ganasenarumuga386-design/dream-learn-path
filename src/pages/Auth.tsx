import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import logo from "@/assets/logo.png";
import { toast } from "sonner";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initial = location.pathname === "/signup" ? "signup" : "login";
  const [tab, setTab] = useState(initial);
  const [role, setRole] = useState("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`${tab === "signup" ? "Account created" : "Logged in"} as ${role}! (Demo)`);
    navigate("/");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-4 py-12">
      <Card className="w-full max-w-md p-8">
        <Link to="/" className="flex justify-center mb-6">
          <img src={logo} alt="Dream Learn" className="h-14 w-auto bg-primary p-2 rounded-lg" />
        </Link>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label className="mb-2 block">I am a</Label>
              <RadioGroup value={role} onValueChange={setRole} className="grid grid-cols-2 gap-3">
                <Label className={`flex items-center gap-2 border rounded-md p-3 cursor-pointer ${role === "student" ? "border-primary bg-primary/5" : ""}`}>
                  <RadioGroupItem value="student" /> Student
                </Label>
                <Label className={`flex items-center gap-2 border rounded-md p-3 cursor-pointer ${role === "faculty" ? "border-primary bg-primary/5" : ""}`}>
                  <RadioGroupItem value="faculty" /> Faculty
                </Label>
              </RadioGroup>
            </div>

            <TabsContent value="signup" className="space-y-4 mt-0">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="Your name" />
              </div>
            </TabsContent>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required placeholder="••••••••" />
            </div>

            <Button type="submit" className="w-full" variant="default">
              {tab === "signup" ? `Create ${role} account` : `Login as ${role}`}
            </Button>
          </form>
        </Tabs>
        <p className="text-xs text-muted-foreground text-center mt-6">
          By continuing you agree to the Dream Learn Terms & Privacy Policy.
        </p>
      </Card>
    </main>
  );
};

export default Auth;