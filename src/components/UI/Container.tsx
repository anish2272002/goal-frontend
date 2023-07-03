import "./Container.css";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Container = ({ children }: props) => {
  return <div className="cont">{children}</div>;
};

export default Container;
