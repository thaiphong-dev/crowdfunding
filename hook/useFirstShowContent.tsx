import React, { useEffect, useState } from "react";

export default function useFirstShowContent() {
  const [showFirstContent, setShowFirstContent] = useState(false);
  const [showSecondContent, setShowSecondContent] = useState(false);

  useEffect(() => {
    const showFirstContent = setTimeout(() => {
      setShowFirstContent(true);
    }, 1000); // Delay for 1s

    const showSecondContent = setTimeout(() => {
      setShowSecondContent(true);
    }, 1500); // Delay for 1.5s

    return () => {
      clearTimeout(showFirstContent);
      clearTimeout(showSecondContent);
    };
  }, []);

  return { showFirstContent, showSecondContent };
}
