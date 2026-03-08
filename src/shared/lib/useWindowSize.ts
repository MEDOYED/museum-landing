"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseWindowSizeOptions {
  debounceMs?: number;
}

interface WindowSize {
  windowWidth: number;
  windowHeight: number;
}

export const useWindowSize = ({
  debounceMs = 100,
}: UseWindowSizeOptions = {}): WindowSize => {
  const [windowWidth, setWindowWidth] = useState<number>(() => 
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [windowHeight, setWindowHeight] = useState<number>(() => 
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateSize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  const debouncedUpdate = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(updateSize, debounceMs);
  }, [debounceMs, updateSize]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Синхронізуємо стан з актуальним розміром вікна
    updateSize();

    const handler = debounceMs > 0 ? debouncedUpdate : updateSize;
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [debounceMs, debouncedUpdate, updateSize]);

  return { windowWidth, windowHeight };
};
