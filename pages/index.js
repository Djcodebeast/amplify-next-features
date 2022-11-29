import Link from "next/link"

export default function Home() {
  const pageLinks = [
    {
      href: "/getServersideprops",
      title: "Get Server Side data"
    },
    {
      href: "/products",
      title: "Get Static Paths"
    },
    {
      href: "/getStaticProps",
      title: "Get Static Props"
    },
    {
      href: "/image",
      title: "Next Image"
    },
    {
      href: "/redirect",
      title: "Middleware "
    },
    {
      href: "/routing",
      title: "Using Next Link"
    },
    {
      href: "/apirouting",
      title: "API Routing"
    },
  ]

  return (
    <div className="my-12">
      <ul className="space-y-1 max-w-md list-none list-inside text-gray-500 dark:text-gray-400">
        {pageLinks.map((page, i) => (
          <li key={i}>
            <Link
              href={{
                pathname: page.href,
              }}
              className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
