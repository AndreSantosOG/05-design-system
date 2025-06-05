import { ReactNode, useState } from "react";
import { TooltipContainer, TooltipWrapper } from "./styles";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipWrapper
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <TooltipContainer>{content}</TooltipContainer>}
    </TooltipWrapper>
  );
}
