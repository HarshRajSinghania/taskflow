import { useEffect } from "react";

/**
 * Sets the document title to "<title> — TaskFlow".
 * Falls back to "TaskFlow" when no title is provided.
 * Restores the previous title on unmount.
 */
const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} — TaskFlow` : "TaskFlow";
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default usePageTitle;
