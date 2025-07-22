import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cloud,
  Code2,
  FileCode,
  GitBranch,
  Globe,
  Package,
  Palette,
  Server,
  Settings,
  Terminal,
} from "lucide-react";
import ScrollFloat from "./animation/ScrollFloat";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend",
      skills: [
        { name: "React", icon: Code2 },
        { name: "TypeScript", icon: FileCode },
        { name: "Next.js", icon: Code2 },
        { name: "Tailwind CSS", icon: Palette },
        // { name: "Vue.js", icon: Code2 },
        { name: "JavaScript", icon: FileCode },
        { name: "HTML5", icon: FileCode },
        { name: "CSS3", icon: Palette },
        { name: "SCSS", icon: Palette },
      ],
    },
    // {
    //   title: "Backend",
    //   icon: Server,
    //   skills: [
    //     { name: "Node.js", icon: Server },
    //     { name: "Express", icon: Server },
    //     { name: "Python", icon: FileCode },
    //     { name: "Django", icon: Server },
    //     { name: "PostgreSQL", icon: Database },
    //     { name: "MongoDB", icon: Database },
    //     { name: "Redis", icon: Database },
    //     { name: "GraphQL", icon: Code2 },
    //   ],
    // },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        // { name: "AWS", icon: Cloud },
        { name: "Docker", icon: Package },
        // { name: "Kubernetes", icon: Settings },
        { name: "CI/CD (Github Action)", icon: GitBranch },
        { name: "Linux", icon: Terminal },
        { name: "Nginx", icon: Server },
        // { name: "Terraform", icon: Settings },
        // { name: "Jenkins", icon: GitBranch },
      ],
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git", icon: GitBranch },
        // { name: "Figma", icon: Palette },
        { name: "VSCode", icon: FileCode },
        { name: "Postman", icon: Server },
        // { name: "Jest", icon: TestTube },
        // { name: "Cypress", icon: TestTube },
        // { name: "Webpack", icon: Package },
        { name: "Vite", icon: Package },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-4xl font-bold text-center mb-12">
            Skills & Technologies
          </h2> */}
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-center text-4xl font-bold mb-12"
          >
            Skills & Technologies
          </ScrollFloat>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                >
                  <CardHeader>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CategoryIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl font-semibold text-center">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer flex items-center gap-1"
                          >
                            <SkillIcon className="h-3 w-3" />
                            {skill.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
