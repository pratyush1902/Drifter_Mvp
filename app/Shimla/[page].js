import Info from '@/Components/Info'
import React from 'react'
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { destination } = router.query;
  return (
    <div>
 {destination && <Info/>}
    </div>
  )
}
