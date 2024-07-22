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
        {/* <h1 className="text-4xl font-bold mb-4">{cityData.attributes.Name}</h1> */}
        <Info/>
        {/* <p className="text-lg">{cityData.attributes.description}</p> */}
        {/* Add more city details as needed */}
      </div>
    );
  } catch (error) {
    console.error('Error fetching city data:', error);
    notFound();
  }
}
