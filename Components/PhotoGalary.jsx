import React from 'react';

const ProfileGallery = ({ Name = "Traveler's Gallery" }) => {
  const images = [
    "https://cdn.usegalileo.ai/stability/09a5dddc-e68b-4ad8-934e-794a1dc4491a.png",
    "https://cdn.usegalileo.ai/sdxl10/cd55dab1-da92-4a4b-89e8-839d7580cc35.png",
    "https://cdn.usegalileo.ai/sdxl10/667f14f5-5817-41c5-8c32-d0dc562f3de7.png",
    "https://cdn.usegalileo.ai/sdxl10/27570284-b350-4a69-811d-5329e48be889.png",
    "https://cdn.usegalileo.ai/sdxl10/571600ee-555e-4df7-b86f-8a1b50893994.png",
    "https://cdn.usegalileo.ai/sdxl10/85bc7e86-0b68-400f-b1c4-6b24054a2a13.png",
    "https://cdn.usegalileo.ai/stability/0660747f-fbb4-4fcd-9e5c-4e060b3d66bc.png",
    "https://cdn.usegalileo.ai/sdxl10/26e8d32c-c24a-4056-b57e-6147f293d4df.png",
    "https://cdn.usegalileo.ai/sdxl10/6ab46480-a135-428d-aa8a-3b371003aba6.png",
    "https://cdn.usegalileo.ai/sdxl10/44b65ebb-6016-467e-aa9e-e0c93bd17bb6.png",
  ];

  return (
    <div className="px-6 md:px-20 lg:px-40 flex justify-center py-5">
      <div className="max-w-[1160px] w-full">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[480px] gap-6 bg-cover bg-center bg-no-repeat rounded-xl p-4"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/1b4b7287-d3c7-4e54-a68c-f03f2dcf5888.png")',
          }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight">
            {Name}
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-xl overflow-hidden">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileGallery;
