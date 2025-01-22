import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[600px] pt-20 text-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline">Return Home</Link>
    </div>
  )
}