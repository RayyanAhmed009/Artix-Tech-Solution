
import { useState } from "react";
import { Plus } from "lucide-react";

const leftFaqs = [
    {
        question: "How much does a custom website cost?",
        answer:
            "Every project is scoped individually based on pages, features and integrations. Simple marketing sites typically start around $2,500, while larger builds with custom functionality are quoted after a short discovery call.",
    },
    {
        question: "How long does development take?",
        answer:
            "Most projects launch within 2–6 weeks. A simple brochure site can be live in as little as two weeks, while e-commerce or web app builds take longer depending on scope.",
    },
    
    {
        question: "Can you redesign my existing website?",
        answer:
            "Absolutely. We start with a free audit of your current site, keep what works — content, URLs, rankings — and rebuild the design and experience around your goals.",
    },
    {
        question: "Do you offer ongoing maintenance?",
        answer:
            "Yes. Monthly care plans cover updates, security monitoring, backups, small content changes and priority support so your site keeps running smoothly after launch.",
    },
];

const rightFaqs = [
    {
        question: "Will my website be mobile responsive?",
        answer:
            "Yes — every site we build is fully responsive and tested across phones, tablets and desktops before launch. Mobile experience is designed first, not added later.",
    },
    {
        question: "Do you provide hosting?",
        answer:
            "We offer managed hosting with fast load times, SSL and daily backups, or we can deploy to your preferred provider — whichever suits your team best.",
    },
    
    {
        question: "What industries do you specialize in?",
        answer:
            "We work across SaaS, e-commerce, professional services, healthcare and local businesses. Our process adapts to your industry rather than the other way around.",
    },
    {
        question: "Can I pay in installments?",
        answer:
            "Yes. Projects are billed in milestones — typically 50% to start, 25% at design approval and 25% at launch — so you only pay as work is delivered.",
    },
];

function FaqItem({ faq }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`overflow-hidden rounded-xl border card-glow transition-colors duration-300 ${open
                    ? "border-[#d96bff50]"
                    : "border-[#d96bff50] hover:border-[#F648FF]"
                }`}
        >
            <button
                type="button"
                onClick={() => setOpen((previous) => !previous)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
                <span className="text-sm font-semibold text-white sm:text-[15px]">
                    {faq.question}
                </span>

                <Plus
                    className={`h-4 w-4 shrink-0 transition-all duration-300 ${open
                            ? "rotate-45 text-purple-600"
                            : "rotate-0 text-white"
                        }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-out ${open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-white sm:px-6 sm:pb-6">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FaqSection() {
    return (
        <section className="card-glow">
            <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">

                    {/* Section Heading */}
                    <div>
                        <p className="text-sm font-bold tracking-wide text-[#f3a8ff]">
                            Frequently Asked Questions
                        </p>

                        <h2 className="mt-3 whitespace-nowrap text-2xl text-gradient font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-2xl">
                            Your Questions Answered.
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-white">
                            Find answers to common questions about our services,
                            development process, pricing and ongoing support.
                        </p>
                    </div>

                    {/* FAQ Columns */}
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8">

                        {/* Left Column */}
                        <div className="flex flex-col gap-4">
                            {leftFaqs.map((faq) => (
                                <FaqItem key={faq.question} faq={faq} />
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4">
                            {rightFaqs.map((faq) => (
                                <FaqItem key={faq.question} faq={faq} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
