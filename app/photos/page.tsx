import Link from 'next/link'
import Image from 'next/image'

import photos from '@/lib/photos'

export default function Photos() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='font-serif text-3xl font-bold text-gray-700'>Photos</h1>

        <ul className='mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {photos.map(({ id, imageSrc }) => (
            <li key={id}>
              <Link href={`/photos/${id}`}>
                <Image
                  alt=''
                  src={imageSrc}
                  height={500}
                  width={500}
                  className='aspect-square w-full rounded-xl object-cover'
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
