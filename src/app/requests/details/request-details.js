"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestDetailsComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userRole, setUserRole] = useState("");
  const [userId, setUserId] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [bidNotes, setBidNotes] = useState("");
  const [showBidForm, setShowBidForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bidMessage, setBidMessage] = useState({ text: "", type: "" });
  const [bids, setBids] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Get request details from search params
  const request = {
    id: searchParams.get("id") || "",
    title: searchParams.get("title") || "N/A",
    description: searchParams.get("description") || "N/A",
    location: searchParams.get("location") || "N/A",
    urgency: searchParams.get("urgency") || "N/A",
    date: searchParams.get("date") || "N/A",
    min_budget: searchParams.get("min_budget") || "N/A",
    max_budget: searchParams.get("max_budget") || "N/A",
    notify: searchParams.get("notify") === "true",
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

  // Fetch user data and token on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      const id = localStorage.getItem("userId");

      if (!token) {
        setError("You must be logged in to view this page");
        return;
      }

      setUserRole(role || "");
      setUserId(id || "");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-400">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto w-full mt-24 p-6">
        <h2 className="text-3xl font-bold text-gray-800">Request Details</h2>
        <p>Title: {request.title}</p>
        <p>Location: {request.location}</p>
        <p>Description: {request.description}</p>
      </div>
      <Footer />
    </div>
  );
}
