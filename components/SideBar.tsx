import Link from 'next/link'

const menuItems = [
  {
    href: '/',
    title: 'Homepage',
  },
  {
    href: '/item',
    title: 'Item',
  },
  {
    href: '/project',
    title: 'Project',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
]

const SideBar = () => {
  return (
    <aside className="w-full bg-fuchsia-100 md:w-60">
      <nav>
        <ul>
          {menuItems.map(({ href, title }) => (
            <li className="m-2" key={title}>
              <Link href={href}>
                <a
                  className={`flex cursor-pointer rounded bg-fuchsia-200 p-2 hover:bg-fuchsia-400`}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
