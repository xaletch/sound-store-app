import React from "react"

interface SectionTitleProps {
  children?: React.ReactNode;
  title: string;
}

export const SectionTitle = ({ children, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-between mb-4.5">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
