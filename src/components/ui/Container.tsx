import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  // h-full : will take necessary height as per content
  // h-screen : will take necessary height as per screen
  // bg-primary-gradient
  return <div className="h-full  max-w-[1250px] mx-auto">{children}</div>;
};

export default Container;
