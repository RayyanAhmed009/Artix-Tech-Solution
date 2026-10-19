
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import Logo from "./Logo";

export default function NewServicesPopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem("artix-launch-shown");

        if (alreadyShown) return;

        const timer = setTimeout(() => {
            setOpen(true);
            sessionStorage.setItem("artix-launch-shown", "true");
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="launch-modal-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) setOpen(false);
            }}
        >
            <div
                className="launch-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="launch-modal-title"
            >
                <button
                    type="button"
                    className="launch-modal-close"
                    onClick={() => setOpen(false)}
                    aria-label="Close announcement"
                >
                    <X size={19} />
                </button>

                <div className="launch-modal-top">
                    <div className="launch-modal-icon">
                        <Logo />
                    </div>
                </div>

                <p className="launch-modal-overline">
                    SOMETHING NEW IS HERE
                </p>

                <h2 id="launch-modal-title" className="launch-modal-title">
                    NEW SERVICES.
                    <span> NEW POSSIBILITIES.</span>
                </h2>

                <p className="launch-modal-description">
                    We’ve launched new creative services at Artix Tech Solutions.
                    Discover what’s new and let’s bring your next big
                    idea to life.
                </p>

                <div className="launch-modal-actions">
                    <Link
                        to="/services"
                        className="launch-modal-cta"
                        onClick={() => setOpen(false)}
                    >
                        Explore New Services
                        <ArrowUpRight size={18} />
                    </Link>

                    {/* <button
                        type="button"
                        className="launch-modal-later"
                        onClick={() => setOpen(false)}
                    >
                        Maybe Later
                    </button> */}
                </div>

                <span className="launch-modal-watermark" aria-hidden="true">
                    ARTIX
                </span>
            </div>
        </div>
    );
}
