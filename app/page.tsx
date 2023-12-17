import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='font-serif text-3xl font-bold text-slate-700'>
          Intercepting Routes
        </h1>

        <div className='mt-10'>
          <Link
            href='/photos'
            className='font-semibold italic text-sky-600 underline'
          >
            Go to photos
          </Link>
        </div>
      </div>
    </section>
  )
}
