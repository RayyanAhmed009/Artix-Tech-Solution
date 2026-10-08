import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { portfolioFilters, portfolioItems } from "../data/site";

function Portfolio() {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const visible =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.filter === active);

  return (
    <section
      className="mx-auto max-w-7xl px-6 pt-14 pb-20 lg:px-10"
      aria-labelledby="portfolio-title"
    >
      {/* Section Heading */}
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.15em] text-neon-pink">
          OUR PORTFOLIO
        </p>

        <h1
          id="portfolio-title"
          className="mt-4 text-4xl font-semibold sm:text-5xl"
        >
          Our Recent{" "}
          <span className="text-gradient-violet">Work</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          Explore our creative work, digital experiences,
          and innovative projects. Select a category to
          discover the complete collection.
        </p>
      </Reveal>

      {/* Category Filters */}
      <div
        className="mt-9 flex flex-wrap gap-3 lg:pl-11"
        role="tablist"
        aria-label="Filter projects"
      >
        {portfolioFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={`h-10 whitespace-nowrap rounded-md px-4 text-sm font-medium transition-all duration-200 ${
              active === filter
                ? "btn-gradient text-white shadow-[0_0_20px_rgba(168,60,245,0.2)]"
                : "border border-white/[0.06] bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Portfolio Cards */}
      <motion.div
        layout
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <TiltCard
                intensity={7}
                className="card-glow group h-full overflow-hidden rounded-xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
                  aria-label={`Open ${project.title} gallery`}
                >
                  {/* Cover Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#090611]/0 transition-colors duration-300 group-hover:bg-[#090611]/55">
                      <span className="flex translate-y-3 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View Gallery
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Image Count */}
                    <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      {(project.images || [project.image]).length} Projects
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="flex items-center justify-between gap-3 px-5 py-5">
                    <div>
                      <h2 className="text-[15px] font-semibold text-white">
                        {project.title}
                      </h2>

                      <p className="mt-1.5 text-[13px] text-white/55">
                        {project.category}
                      </p>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neon-pink/25 text-neon-pink transition-all duration-300 group-hover:border-neon-pink group-hover:bg-neon-pink/10">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                    </span>
                  </div>
                </button>
              </TiltCard>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-white/60">
          No projects in this category yet.
        </p>
      )}

      {/* View More Button */}
      <div className="mt-14 flex justify-center">
        <Link
          to="/contact"
          className="group flex h-12 items-stretch overflow-hidden rounded-lg shadow-[0_0_28px_rgba(168,60,245,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
        >
          <span className="btn-gradient flex items-center px-8 text-sm font-semibold text-white sm:px-11">
            Start Your Project
          </span>

          <span className="flex w-12 items-center justify-center border border-l-0 border-neon-blue/40 bg-ink text-neon-blue">
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} gallery`}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#100d1b] p-5 shadow-[0_0_60px_rgba(168,60,245,0.16)] sm:p-8"
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-neon-pink">
                    OUR PORTFOLIO
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {selectedProject.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/50">
                    {selectedProject.category} ·{" "}
                    {(selectedProject.images || [selectedProject.image]).length} projects
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-neon-pink/50 hover:bg-neon-pink/10 hover:text-neon-pink"
                  aria-label="Close gallery"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Gallery Images */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {(selectedProject.images || [selectedProject.image]).map(
    (image, index) => (
      <motion.div
        key={`${selectedProject.title}-${image}-${index}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: Math.min(index * 0.06, 0.3),
        }}
        className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
      >
        <button
          type="button"
          onClick={() => setPreviewImage(image)}
          className="block w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-pink"
          aria-label="View larger image"
        >
          <img
            src={image}
            alt={`${selectedProject.title} project ${index + 1}`}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        <div className="flex items-center justify-between px-3 py-3">
          <p className="text-sm font-medium text-white/80">
            Project {String(index + 1).padStart(2, "0")}
          </p>

          <span className="text-xs text-neon-pink">
            {selectedProject.filter}
          </span>
        </div>
      </motion.div>
    )
  )}
</div>

{/* Full Image Preview */}
<AnimatePresence>
  {previewImage && (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setPreviewImage(null)}
    >
      <button
        type="button"
        onClick={() => setPreviewImage(null)}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:border-neon-pink hover:text-neon-pink"
        aria-label="Close image preview"
      >
        <X className="h-6 w-6" />
      </button>

      <motion.img
        src={previewImage}
        alt="Full-size project preview"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-[0_0_50px_rgba(168,60,245,0.2)]"
      />
    </motion.div>
  )}
</AnimatePresence>



              {/* Modal Footer */}
              <div className="mt-7 flex justify-center border-t border-white/[0.08] pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg border border-white/10 px-6 py-2.5 text-sm font-medium text-white/75 transition hover:border-neon-pink/40 hover:text-white"
                >
                  Close Gallery
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;

