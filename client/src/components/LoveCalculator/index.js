import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../../utils/auth";

function LoveCalculator() {
  const [lovePercentage, setLovePercentage] = useState(null);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState(AuthService.getName());
  const [viewedProfile, setViewedProfile] = useState("");

  // Extract User ID from the URL
  const { id } = useParams();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/profile/${id}`);
        const data = await response.json();
        setViewedProfile(data.birdname);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching the profile.");
      }
    };
    fetchProfile();
  }, [id]);
  
  useEffect(() => {
    const fetchLovePercentage = async () => {
      const url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${userName}&sname=${viewedProfile}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2f4c041e57msha3ca754b5486ff4p1683d6jsn364a287ef518",
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);
        setLovePercentage(data.percentage);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching the love percentage.");
      }
    };
    if (viewedProfile) {
      fetchLovePercentage();
    }
  }, [viewedProfile, userName]);
  if (error) {
    return <div>{error}</div>;
  } else if (lovePercentage === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      The love potential with {viewedProfile} is{" "}
      {lovePercentage}%!
    </div>
  );
}

export default LoveCalculator;
