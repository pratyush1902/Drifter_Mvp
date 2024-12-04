'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const data = {
  images: [
    "https://cdn.usegalileo.ai/stability/4e23ac87-4b3d-4c1f-a070-e288eccfca8c.png",
    "https://cdn.usegalileo.ai/stability/021b51d1-ece5-474b-a2b7-42cc1b43226c.png",
    "https://cdn.usegalileo.ai/sdxl10/f94cc51e-f9d6-4424-b4c9-47ab19b54823.png",
    "https://cdn.usegalileo.ai/stability/42ae6b6d-8286-43fe-b211-69fa744c9e90.png",
    "https://cdn.usegalileo.ai/stability/215d297b-6f77-422d-accf-f737fabe707f.png",
  ],
  includedItems: [
    { title: "Island hopping", description: "Visit 3 islands in one day" },
    { title: "Snorkeling gear", description: "Explore the underwater world" },
    { title: "Lunch and beverages", description: "Enjoy a beachside BBQ" },
    { title: "Professional guide", description: "Learn about local marine life" },
    { title: "Age limit", description: "Minimum age is 8 years old" },
    { title: "Pregnancy", description: "Not recommended for pregnant women" },
    { title: "Food allergies", description: "Please advise of any dietary restrictions" },
    { title: "Cancellation policy", description: "Full refund for cancellations made at least 24 hours in advance" },
  ],
  contacts: [
    { icon: "MapPin", title: "Visit our office", detail: "123 Main St. San Francisco, CA 94102" },
    { icon: "PaperPlane", title: "Send us an email", detail: "info@adventureco.com" },
    { icon: "Phone", title: "Give us a call", detail: "Call us at (123) 456-7890" },
  ],
};

 



const IslandHopping = () => {
  const { destinationId,  activityid } = useParams();
  const [activityDetails, setActivityDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchActivityDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/activites/${activityid}`);
        setActivityDetails(response.data.data.attributes);
      } catch (error) {
        console.error('Error fetching spot details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityDetails();
  }, [activityid]);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1260px] flex-1">
        <h1 className="text-[#111518] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
           {activityDetails.Name}
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(258px,1fr))] gap-3 p-4">
          {data.images.map((url, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            </div>
          ))}
        </div>
        <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-2 pt-4">
          $199 per person
        </h2>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          What's included &amp; Rules
        </h2>
        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          {data.includedItems.map((item, index) => (
            <div key={index} className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe1e6] py-5">
              <p className="text-[#60778a] text-sm font-normal leading-normal">{item.title}</p>
              <p className="text-[#111518] text-sm font-normal leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Contact us to book this adventure
        </h2>
        {data.contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className={`text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12`} data-icon={contact.icon} data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                {/* SVG path here based on the contact.icon */}
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">{contact.title}</p>
              <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">{contact.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IslandHopping;
