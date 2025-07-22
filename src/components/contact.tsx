"use client";

// import { useState } from "react";
import {
  // Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ScrollFloat from "./animation/ScrollFloat";
// import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  // const { toast } = useToast();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Basic form validation
  //   if (!formData.name || !formData.email || !formData.message) {
  //     toast({
  //       title: "Error",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   // In a real application, you would send this data to your backend
  //   console.log("Form submitted:", formData);

  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for your message. I'll get back to you soon!",
  //   });

  //   // Reset form
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hlainghpone1@gmail.com",
      href: "mailto:hlainghpone1@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+959954802767",
      href: "tel:+959954802767",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Yangon, Myanmar",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/HlaingHpone1",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hlainghpone/",
      color: "hover:text-blue-600",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/leo.jake/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2> */}
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-center text-4xl font-bold mb-12"
          >
            Get In Touch
          </ScrollFloat>
          <div className="flex flex-wrap justify-between gap-4 mb-5">
            <Card className="hover:shadow-lg transition-shadow duration-300 flex-1">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <info.icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <Link
                        href={info.href}
                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 flex-1">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Me</CardTitle>
                <p className="text-muted-foreground">
                  Connect with me on social media for updates and insights.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-200 ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="dark:text-gray-600" size={20} />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Card className="">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Let&apos;s Build Something Amazing
                </h3>
                <p className="text-muted-foreground mb-4">
                  I&apos;m always interested in new opportunities and exciting
                  projects. Whether you&apos;re a startup, agency, or
                  enterprise, let&apos;s discuss how we can work together.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* <div className="grid lg:grid-cols-2 gap-12">
            Contact Form
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  I&apos;d love to hear from you! Whether you have a project
                  idea, job opportunity, or just want to connect, feel free to
                  reach out.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            Contact Information
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <info.icon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <Link
                          href={info.href}
                          className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </Link>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Follow Me</CardTitle>
                  <p className="text-muted-foreground">
                    Connect with me on social media for updates and insights.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-6">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-200 ${social.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="dark:text-gray-600" size={20} />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Let&apos;s Build Something Amazing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    I&apos;m always interested in new opportunities and exciting
                    projects. Whether you&apos;re a startup, agency, or
                    enterprise, let&apos;s discuss how we can work together.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
