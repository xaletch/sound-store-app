import { Link } from "@tanstack/react-router";
import React from "react";

interface LinkButtonProps {
  href?: string;
  children?: React.ReactNode;
}

export const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <Link className={"px-2.5 py-1 flex items-center justify-center h-7.5 rounded-full border border-black font-medium hover:bg-black hover:text-white active:bg-black active:text-white duration-300"} to={href}>{children}</Link>
  )
}
