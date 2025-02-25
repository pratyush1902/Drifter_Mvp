"use client";

import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import Hero from "@/Components/Hero";
import Top_place from "@/Components/Top_place";
import Trending_place from "@/Components/Trending_place";
import State from "@/Components/State";
import CommingSoon from "@/Components/CommingSoon";
import Work from "@/Components/HowItWork";

export default function Page() {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!session?.user) return;
  
    const fetchUserData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/user_profiles?filters[user_id][$eq]=${session.user.id}`
        );
        const responseData = await res.json();
  
        if (responseData.data.length > 0) {
          // If user exists, set state
          setUserData(responseData.data[0]);
        } else {
          // If user does not exist, create a new entry
          const newUser = {
            user_id: session.user.id,
            name: session.user.name || "",
            bio: "",
            interests: "",
            profilePic: session.user.image || "",
          };
  
          const createRes = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/user_profiles`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ data: newUser }),
            }
          );
  
          if (createRes.ok) {
            const createdUser = await createRes.json();
            setUserData(createdUser.data);
          } else {
            console.error("Failed to create user:", await createRes.json());
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [session]);
  

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <Hero />
      <Top_place />
      <Trending_place />
      <State />
      <Work />
      <CommingSoon />

      {/* Signup Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">Join Drifter Now!</h2>
            <p className="mb-4">Sign up to explore personalized travel experiences.</p>
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Sign Up with Google
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-4 text-gray-600 hover:underline"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
