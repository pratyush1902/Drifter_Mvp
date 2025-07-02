"use client";
import { useEffect, useMemo } from "react";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Head from "next/head";

export default function Profile() {
  const { data: session } = useSession();
  
  useEffect(() => {
    document.title = "Welcome to Drifter";
  }, []);

  const user = useMemo(() => session?.user, [session]);

  if (!user) {
    return (
      <>
        <Head>
          <title>Sign In - Drifter</title>
          <meta name="description" content="Sign in to access your Drifter profile and explore new adventures." />
        </Head>
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
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Welcome, {user.name} - Drifter</title>
        <meta name="description" content={`View ${user.name}'s profile on Drifter and explore personalized adventures.`} />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-lg text-center">
          <Image
            src={user.image || "/placeholder.jpg"}
            alt="Profile"
            width={180}
            height={180}
            className="rounded-full border-4 border-blue-500 shadow-lg mx-auto"
          />
          <h2 className="mt-6 text-4xl font-bold text-gray-800">Hi, {user.name}!</h2>
          <p className="text-2xl text-gray-600 mt-3">{user.email}</p>
        </div>
      </div>
    </>
  );
}
