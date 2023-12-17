import Link from 'next/link'
import photos, { Photo } from '@/lib/photos'
import PhotoCard from '@/components/PhotoCard'

export default function PhotoPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const photo: Photo = photos.find(p => p.id === id)!

  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <Link
            href='/photos'
            className='font-semibold italic text-sky-600 underline'
          >
            Back to photos
          </Link>
        </div>

        <div className='mt-10 w-1/3'>
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  )
}
