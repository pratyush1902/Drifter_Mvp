// pages/destination/[destination].js
import { useRouter } from 'next/router';
import DestinationInfo from '@/Components/temp'

const DestinationPage = () => {
  const router = useRouter();
  const { destination } = router.query;

  return (
    <div>
      <h1>Destination Page</h1>
      {destination && <DestinationInfo destination={destination} />}
    </div>
  );
};

export default DestinationPage;
