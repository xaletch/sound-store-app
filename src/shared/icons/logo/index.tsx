import { Link } from "@tanstack/react-router"

import icon from "../../assets/logo.svg"

export const Logo = () => {
  return (
    <Link to="/">
      <img src={icon} alt="logo" />
    </Link>
  )
}
