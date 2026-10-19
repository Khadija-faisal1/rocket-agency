import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

let lenisInstance = null;

export function useLenis() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      anchors: false,
    });

    lenisInstance = lenis;

    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank") return;

      const url = new URL(link.href, window.location.href);

      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      ) {
        return;
      }

      const target = document.getElementById(
        decodeURIComponent(url.hash.slice(1))
      );

      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", url.hash);

      lenis.scrollTo(target, {
        offset: -90,
        duration: 1.2,
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      lenis.destroy();

      if (lenisInstance === lenis) {
        lenisInstance = null;
      }
    };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(id);

        if (target && lenisInstance) {
          lenisInstance.scrollTo(target, {
            offset: -90,
            duration: 1.2,
          });
        }
      } else if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}