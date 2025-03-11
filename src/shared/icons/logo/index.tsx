import { Link } from "@tanstack/react-router"

import icon from "../../assets/logo.svg"

export const Logo = ({ cl='' }: { cl?: string } ) => {
  return (
    <Link to="/">
      <img src={icon} alt="logo" className={`${cl}`} />
    </Link>
  )
}
