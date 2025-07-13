import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-gray-200 rounded-full flex items-center justify-center text-6xl text-gray-600">
                  👨‍💻
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a dedicated frontend developer with a strong passion
                for building fast, scalable, and maintainable web applications.
                I enjoy turning complex problems into simple, efficient
                solutions using modern frontend technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey started with a fascination for how websites work and
                has grown into a full-time commitment to writing clean, modular
                code and building responsive, interactive user interfaces. When
                I&apos;m not coding, I spend my time learning new frameworks,
                improving performance techniques, or contributing to web
                development communities.
              </p>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Core Focus Areas
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Frontend Web Development</li>
                    <li>• JavaScript / TypeScript</li>
                    <li>• Modern Frameworks (e.g., React, Next.js)</li>
                    <li>• Web Performance & Optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
