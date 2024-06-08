// components/ExploreNearby.js
import Link from 'next/link';

const places = [
  { name: 'San Francisco', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: '13 mins drive', link: '/san-francisco' },
  { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: '25 mins drive', link: '/los-angeles' },
  { name: 'Miami', image: 'https://images.unsplash.com/photo-1552133457-ce1d2d33cdfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: '45 mins drive', link: '/miami' },
  { name: 'Sanjosh', image: 'https://images.unsplash.com/photo-1573132223210-d65883b944aa?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: '55 mins drive', link: '/sanjosh' },
  { name: 'New York', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: '1 hour drive', link: '/new-york' },
  { name: 'North Justen', image: 'https://images.unsplash.com/photo-1594146032116-80033545b0b8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: '2 hours drive', link: '/north-justen' },
  { name: 'Rio', image: 'https://plus.unsplash.com/premium_photo-1681550093390-14477e7b196a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: 'Unknown', link: '/rio' },
  { name: 'Las Vegas', image: 'https://images.unsplash.com/photo-1567359485688-f39861174e25?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: 'Unknown', link: '/las-vegas' },
  { name: 'Texas', image: 'https://images.unsplash.com/photo-1561819510-d31fda2bd345?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: 'Unknown', link: '/texas' },
  { name: 'Chicago', image: 'https://images.unsplash.com/photo-1601961405399-801fb1f34581?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: 'Unknown', link: '/chicago' },
  { name: 'New Keagan', image: 'https://images.unsplash.com/photo-1575261755165-1a9d4370c898?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D', drive: 'Unknown', link: '/new-keagan' },
  { name: 'Oslo', image: 'https://images.unsplash.com/photo-1568362137668-3944a4aa19a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', drive: 'Unknown', link: '/oslo' },
];

const ExploreNearby = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold mb-8">Explore Nearby</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {places.map((place) => (
          <Link key={place.name} href={place.link}>
            <div className="flex flex-col items-center text-center transition transform hover:scale-105 cursor-pointer">
              <div className="w-40 h-40 bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${place.image})` }}></div>
              <h3 className="mt-2 text-lg font-semibold">{place.name}</h3>
              <p className="text-gray-500">{place.drive}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreNearby;
