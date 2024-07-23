import { notFound } from 'next/navigation';
import axios from 'axios';
import Info from '@/Components/Info';

export default async function CityPage({ params }) {
  const { id } = params;
  
  try {
    const response = await axios.get(`http://localhost:1337/api/destinations/${id}`);
    const cityData = response.data.data;

    if (!cityData) {
      notFound();
    }

    return (
      <div className="container mx-auto p-4">
        
        <Info cityData={cityData.attributes}/>
       
      </div>
    );
  } catch (error) {
    console.error('Error fetching city data:', error);
    notFound();
  }
}
