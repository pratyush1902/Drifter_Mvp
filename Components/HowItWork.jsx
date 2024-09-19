import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-8">
        How It Works
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Discover how our platform helps backpackers find the best travel experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          title="Explore Destinations"
          description="Discover hidden gems, embrace local cultures, and support eco-friendly tourism."
          imageSrc="/work2.png"
        />
        <Card
          title="Plan Your Trip"
          description="Plan your trip with local insights, personalized recommendations, and seamless experiences."
          imageSrc="/work1.png"
        />
        <Card
          title="Book activities and experiences "
          description="Book activities and experiences effortlessly, with tailored recommendations and local insights."
          imageSrc="/work4.png"
        />
        <Card
          title="Explore Sustainable and Unique Travel "
          description="Explore sustainable and unique travel with local insights and eco-friendly options."
          imageSrc="/work3.png"
        />
      </div>
    </div>
  );
};

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative w-32 h-32 mx-auto mb-6">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
           
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default HowItWorks;
