import type { Metadata } from "next";
import { PROJECTS } from "@/constants";
import ProjectDetailClient from "./ProjectDetailClient";
import { SITE_NAME, SITE_STUDIO_NAME } from "@/config/siteMode";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) {
    return {
      title: "Model Not Found",
    };
  }

  const modelSystemName =
    project.technicalSpecs?.find(
      (s) =>
        s.label.toLowerCase().includes("system") ||
        s.label.toLowerCase().includes("capsule")
    )?.value ?? `${project.category} Modular Capsule`;

  return {
    title: `${project.title} — ${modelSystemName}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${modelSystemName} | ${SITE_STUDIO_NAME}`,
      description: project.description,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${modelSystemName} | ${SITE_STUDIO_NAME}`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetailClient id={id} />;
}
