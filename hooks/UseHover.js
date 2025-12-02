import { useState } from "react";

export const useHover = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleHover = (itemId, isHovered) => {
    setHoveredItemId(isHovered ? itemId : null);
  };

  return { hoveredItemId, handleHover };
};
