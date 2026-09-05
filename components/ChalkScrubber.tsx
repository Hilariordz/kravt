"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/chalk.mp4";

const BEATS = [
  { id: "b1", from: 0.0,  to: 0.14, position: "top",   text: "Antes del levantamiento."             },
  { id: "b2", from: 0.24, to: 0.38, position: "bottom", text: "Las cinco de la mañana.\nSala vacía." },
  { id: "b3", from: 0.72, to: 0.88, position: "bottom", text: "El polvo es el recibo."              },
];

export default function ChalkScrubber() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);

  const [loaded,      setLoaded]      = useState(false);
  const [progress,    setProgress]    = useState(0);
  const [activeBeats, setActiveBeats] = useState<Set<string>>(new Set(["b1"]));
  const [reducedMotion, setReducedMotion] = useState(false);  // Reduced-motion (SSR-safe)
  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Fetch video as Blob → fixes byte-range / seekable issues on some hosts
  useEffect(() => {
    let objectUrl = "";
    fetch(VIDEO_SRC)
      .then((r) => (r.ok ? r.blob() : Promise.reject(r.status)))
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        if (videoRef.current) { videoRef.current.src = objectUrl; videoRef.current.load(); }
      })
      .catch(() => {
        if (videoRef.current) { videoRef.current.src = VIDEO_SRC; videoRef.current.load(); }
      });
    return () => { if (objectUrl) URL.revokeObjectURL(objectUrl); };
  }, []);

  // Pin to frame 0 once loadeddata fires
  useEffect(() => {
    const film = videoRef.current;
    if (!film) return;
    const onLoaded = () => { film.currentTime = 0; setLoaded(true); };
    film.addEventListener("loadeddata", onLoaded, { once: true });
    return () => film.removeEventListener("loadeddata", onLoaded);
  }, []);

  // RAF scrub loop
  useEffect(() => {
    if (!loaded || reducedMotion) return;
    const film  = videoRef.current;
    const stage = stageRef.current;
    if (!film || !stage) return;
    let current = 0;
    const tick = () => {
      const rect   = stage.getBoundingClientRect();
      const stageH = stage.offsetHeight;
      const viewH  = window.innerHeight;
      const target = Math.min(Math.max(-rect.top / (stageH - viewH), 0), 1);
      current += (target - current) * 0.12;
      if (film.duration > 0) {
        const desired = current * (film.duration - 0.05);
        if (Math.abs(film.currentTime - desired) > 0.005) film.currentTime = desired;
      }
      setProgress(current);
      const next = new Set<string>();
      BEATS.forEach((b) => { if (current >= b.from && current <= b.to) next.add(b.id); });
      setActiveBeats(next);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [loaded, reducedMotion]);

  const pct = String(Math.round(progress * 100)).padStart(2, "0");
  void pct; // unused — HUD removed

  return (
    <>
      {/* ── Fixed nav ─────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 36px", pointerEvents: "none",
      }}>
        <span style={{ pointerEvents: "auto" }}>
          <img
            src="/kravt.png"
            alt="KRAVT"
            style={{ height: 28, width: "auto", display: "block" }}
          />
        </span>

        <ul className="nav-links" style={{
          display: "flex", gap: 32, listStyle: "none",
          fontFamily: "var(--font-roboto), sans-serif", fontSize: 11,
          letterSpacing: ".12em", textTransform: "uppercase",
          color: "rgba(255,255,255,.55)", pointerEvents: "auto",
        }}>
          {["Método", "Coaches", "Membresía", "Visítanos"].map((l) => (
            <li key={l}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>{l}</a></li>
          ))}
        </ul>

        <a href="#" style={{
          pointerEvents: "auto", fontFamily: "var(--font-roboto), sans-serif",
          fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
          color: "var(--bone)", border: "1px solid rgba(220,220,220,.4)",
          borderRadius: 100, padding: "9px 20px", textDecoration: "none",
        }} href="/login">Empieza a entrenar</a>
      </nav>



      {/* ── Stage ─────────────────────────────────────────────── */}
      <section
        ref={stageRef}
        style={{ position: "relative", height: reducedMotion ? "auto" : "700vh" }}
      >
        <div style={{
          position: reducedMotion ? "static" : "sticky",
          top: 0,
          height: reducedMotion ? "auto" : "100vh",
          overflow: "hidden",
          background: "#080808",
          ...(reducedMotion ? { aspectRatio: "16/9" } : {}),
        }}>
          {/* Loading indicator — scoped to stage, not full-page */}
          {!loaded && (
            <div style={{
              position: "absolute", inset: 0, zIndex: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#080808",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
              color: "var(--bone)",
            }}>
              Cargando
            </div>
          )}

          {/* Video */}
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            {...(reducedMotion ? { controls: true } : {})}
            style={{
              position: reducedMotion ? "relative" : "absolute",
              inset: 0, width: "100%", height: "100%",
              objectFit: "cover", display: "block",
            }}
          />

          {/* Vignette */}
          <div style={{
            position: "absolute", inset: 0,
            boxShadow: "inset 0 0 220px 90px rgba(0,0,0,.85)",
            pointerEvents: "none",
          }} />

          {/* Top scrim */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "28vh",
            background: "linear-gradient(to bottom, rgba(0,0,0,.82), transparent)",
            pointerEvents: "none",
          }} />

          {/* Bottom scrim */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "40vh",
            background: "linear-gradient(to top, rgba(0,0,0,.92), transparent)",
            pointerEvents: "none",
          }} />

          {/* Caption beats */}
          {reducedMotion ? (
            <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", gap: 16 }}>
              {BEATS.map((b) => <BeatText key={b.id} text={b.text} visible />)}
            </div>
          ) : (
            BEATS.map((b) => (
              <div key={b.id} style={{
                position: "absolute", left: 36, right: 36,
                ...(b.position === "top" ? { top: "22vh" } : { bottom: "22vh" }),
                opacity: activeBeats.has(b.id) ? 1 : 0,
                transition: "opacity .55s ease",
                pointerEvents: "none",
              }}>
                <BeatText text={b.text} visible />
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── Responsive ────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 820px) {
          .nav-links { display: none !important; }
          .spec-row  { display: none !important; }
        }
      `}</style>
    </>
  );
}

function BeatText({ text, visible }: { text: string; visible: boolean }) {
  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity .55s ease" }}>
      {text.split("\n").map((line, i) => (
        <div key={i} style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontWeight: 400,
          fontSize: "clamp(36px, 5.5vw, 80px)",
          letterSpacing: ".04em",
          lineHeight: 1.0,
          textTransform: "uppercase",
          color: "var(--ink)",
          textShadow: "0 2px 40px rgba(0,0,0,.9), 0 1px 8px rgba(0,0,0,.8)",
        }}>
          {line}
        </div>
      ))}
    </div>
  );
}
