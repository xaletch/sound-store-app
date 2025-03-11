import { FavouritesIcon, FoldersIcon, HomeIcon, SearchIcon } from "@/shared/icons"
import { Link } from "@tanstack/react-router"

const items = [
  {
    name: 'Главная',
    href: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Поиск',
    href: '/search',
    icon: <SearchIcon />,
  },
  {
    name: 'Паки',
    href: '/folders',
    icon: <FoldersIcon />,
  },
  {
    name: 'Избранное',
    href: '/favourites',
    icon: <FavouritesIcon />,
  },
]

export const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 border-t border-black bg-[#E7E4DD]">
      <div className="py-1 px-5 grid grid-cols-4 gap-4 items-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <Link to={item.href}>
              <div className="w-[35px] mx-auto">{item.icon}</div>
              <div className="text-xs font-medium text-center">{item.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
