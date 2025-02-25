"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops! You're lost 😅</h1>
        <p className="text-xl text-gray-600 mb-6">Sign in to see your awesome profile.</p>
        <button
          onClick={() => signIn("google")}
          className="px-8 py-4 bg-blue-500 text-white text-lg rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-lg text-center">
        <Image
          src={session.user.image}
          alt="Profile"
          width={180}
          height={180}
          className="rounded-full border-4 border-blue-500 shadow-lg mx-auto"
        />
        <h2 className="mt-6 text-4xl font-bold text-gray-800"> Hii,{session.user.name}</h2>
        <p className="text-2xl text-gray-600 mt-3">{session.user.email}</p>
      </div>
    </div>
  );
}
