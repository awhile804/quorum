import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function Container({ children, className, as: Tag = "div" }: Props) {
  return (
    <Tag
      className={`mx-auto w-full px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-40 ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
