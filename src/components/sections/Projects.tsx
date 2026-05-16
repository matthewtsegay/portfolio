"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { ExternalLink, Github, ArrowRight, Code } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-4">
              <Code size={14} /> PORTFOLIO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Featured <span className="text-primary">Engineering</span> Projects
            </h2>
            <p className="mt-4 text-muted-foreground">
              Deep dive into some of the systems I&apos;ve architected and built, focusing on backend performance, scalability, and AI integration.
            </p>
          </div>
          <Link href="/projects" className="group flex items-center gap-2 text-primary font-bold hover:underline">
            View All Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-border bg-background overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-primary/5"
            >
              {/* Image Placeholder / Overlay */}
              <div className="aspect-video relative overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                   <Code size={48} className="text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                {/* Tech Badges on Image */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-background/50 backdrop-blur-md text-[10px] font-mono border border-white/10 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity"
                  >
                    View Details
                  </Link>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border hover:bg-muted transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border hover:bg-muted transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
