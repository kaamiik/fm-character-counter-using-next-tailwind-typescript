import * as React from "react";

function MaxWidthWrapper({
  children,
  as: Tag = "div",
  className = "",
  ...delegated
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  return (
    <Tag
      {...delegated}
      className={`max-w-[61.875rem] mx-auto lg:mt-8 lg:mb-16 ${className}`}
    >
      {children}
    </Tag>
  );
}

export default MaxWidthWrapper;
