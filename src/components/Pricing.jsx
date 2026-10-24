
import { useEffect, useRef } from "react";

export default function Pricing() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let observer;

    const resizeFrame = () => {
      try {
        const doc = iframe.contentDocument;
        if (!doc) return;

        const height = Math.max(
          doc.body?.scrollHeight || 0,
          doc.documentElement?.scrollHeight || 0
        );

        iframe.style.height = `${height}px`;
      } catch (error) {
        console.error("Pricing iframe resize failed:", error);
      }
    };

    const handleLoad = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;

      observer = new ResizeObserver(resizeFrame);

      if (doc.body) observer.observe(doc.body);
      observer.observe(doc.documentElement);

      resizeFrame();
      requestAnimationFrame(resizeFrame);
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      observer?.disconnect();
    };
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 overflow-hidden">
      <iframe
        ref={iframeRef}
        src="/pricing.html"
        title="Pricing"
        scrolling="no"
        className="block w-full border-0"
        style={{
          height: "600px",
          overflow: "hidden",
        }}
      />
    </section>
  );
}
