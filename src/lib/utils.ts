export const isMobile = (): boolean => {
    return typeof window !== "undefined" && window.innerWidth <= 1024;
  };
  