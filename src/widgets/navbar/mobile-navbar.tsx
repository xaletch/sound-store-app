import { FavouritesIcon, FoldersIcon, HomeIcon, SearchIcon } from "@/shared/icons"
import { Link, useLocation } from "@tanstack/react-router"

const items = [
  {
    name: 'Главная',
    href: '/',
    paths: ['/', '/faq-support', '/subscribe', '/subscribe/payment'],
    icon: <HomeIcon />,
  },
  {
    name: 'Поиск',
    href: '/search',
    paths: ['/search'],
    icon: <SearchIcon />,
  },
  {
    name: 'Паки',
    href: '/folders',
    paths: ['/folders'],
    icon: <FoldersIcon />,
  },
  {
    name: 'Избранное',
    href: '/favourites',
    paths: ['/favourites'],
    icon: <FavouritesIcon />,
  },
]

export const MobileNavbar = () => {
  const location = useLocation().pathname;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 border-t border-black bg-[#E7E4DD]">
      <div className="py-1 px-5 grid grid-cols-4 gap-4 items-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <Link to={item.href}>
              <div className={`w-[35px] mx-auto ${item.paths.includes(location) ? 'icon-active' : ''}`}>{item.icon}</div>
              <div className={`text-xs md:text-base font-medium text-center ${item.paths.includes(location) ? 'text-[#436c5f]' : ''}`}>{item.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
