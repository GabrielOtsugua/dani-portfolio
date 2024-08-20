import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`${className} w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] m-auto`}
    >
      {children}
    </div>
  );
}
