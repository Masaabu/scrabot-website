
import Link from 'next/link'
 
export default function NotFound() {
  return (
<html>
  <body className="dark">
  <div className="flex flex-col justify-center items-center w-full h-dvh text-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline">Return Home</Link>
    </div>
  </body>
</html>
  )
}