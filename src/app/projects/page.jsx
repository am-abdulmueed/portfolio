import ProjectSection from "@/components/custom/ProjectSection";
import AdSense from "@/components/custom/AdSense";

export const metadata = {
  title: "Projects | Abdul Mueed",
  description: "Explore the projects and open-source contributions of Abdul Mueed.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="lg:px-16 md:px-16 sm:px-10">
        <ProjectSection />
        <AdSense className="my-8" />
      </div>
    </div>
  );
}
