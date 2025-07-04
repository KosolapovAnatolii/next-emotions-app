import Link from "next/link"
import HeaderActions from "./HeaderActions"

export default function PageHeader() {
  return (
    <header className="w-full p-4 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 shadow-md">
      <Link href='/'>
        <h3 className="text-2xl font-semibold">Emotions</h3>
      </Link>
      <HeaderActions />
    </header>
  )
}
