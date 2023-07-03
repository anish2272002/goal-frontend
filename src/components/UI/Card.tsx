import "./Card.css";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Card = ({ children }: props) => {
  return <div className="goalCard">{children}</div>;
};

export default Card;
