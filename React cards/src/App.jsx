import React from "react";
import Card from "./components/Card";

const App = () => {
  const profiles = [
    {
      id: 1,
      name: "Noah Thompson",
      role: "Product Designer",
      bio: "Product Designer who focuses on simplicity & usability.",
      profileImage: "https://i.imgur.com/8Km9tLL.png",
      coverImage:
        "https://images.unsplash.com/photo-1503264116251-35a269479413",
      stats: { likes: "72.9K", posts: 828, views: "342.9K" },
      hasStory: true,
    },
    {
      id: 2,
      name: "Emma Wilson",
      role: "UI Designer",
      bio: "Designing clean interfaces with human-first thinking.",
      profileImage: "https://i.imgur.com/QCNbOAo.png",
      coverImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      stats: { likes: "41.2K", posts: 412, views: "198.4K" },
      hasStory: false,
    },
    {
      id: 3,
      name: "Liam Carter",
      role: "UX Researcher",
      bio: "Turning user insights into meaningful experiences.",
      profileImage: "https://i.imgur.com/4ZQZ4Zy.png",
      coverImage:
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
      stats: { likes: "55.1K", posts: 635, views: "289.6K" },
      hasStory: true,
    },
    {
      id: 4,
      name: "Olivia Brown",
      role: "Visual Designer",
      bio: "Minimal visuals with maximum impact.",
      profileImage: "https://i.imgur.com/sYqY5JH.png",
      coverImage:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      stats: { likes: "63.7K", posts: 521, views: "310.8K" },
      hasStory: false,
    },
    {
      id: 5,
      name: "Ethan Miller",
      role: "Frontend Developer",
      bio: "Building fast, accessible web interfaces.",
      profileImage: "https://i.imgur.com/JzYpG3X.png",
      coverImage:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      stats: { likes: "88.4K", posts: 902, views: "401.2K" },
      hasStory: true,
    },
    {
      id: 6,
      name: "Sophia Davis",
      role: "Interaction Designer",
      bio: "Micro-interactions that feel natural.",
      profileImage: "https://i.imgur.com/0y0y0y0.png",
      coverImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      stats: { likes: "36.9K", posts: 287, views: "156.4K" },
      hasStory: false,
    },
    {
      id: 7,
      name: "James Anderson",
      role: "Motion Designer",
      bio: "Designing motion with purpose.",
      profileImage: "https://i.imgur.com/5X5X5X5.png",
      coverImage:
        "https://images.unsplash.com/photo-1493244040629-496f6d136cc8",
      stats: { likes: "47.3K", posts: 349, views: "221.7K" },
      hasStory: true,
    },
    {
      id: 8,
      name: "Isabella Moore",
      role: "Brand Designer",
      bio: "Creating consistent brand experiences.",
      profileImage: "https://i.imgur.com/9Y9Y9Y9.png",
      coverImage:
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
      stats: { likes: "59.6K", posts: 478, views: "267.3K" },
      hasStory: false,
    },
    {
      id: 9,
      name: "William Taylor",
      role: "Design Lead",
      bio: "Leading teams to design better products.",
      profileImage: "https://i.imgur.com/3A3A3A3.png",
      coverImage:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      stats: { likes: "91.2K", posts: 1043, views: "512.9K" },
      hasStory: true,
    },
    {
      id: 10,
      name: "Ava Johnson",
      role: "Content Designer",
      bio: "Words that guide users effortlessly.",
      profileImage: "https://i.imgur.com/6B6B6B6.png",
      coverImage:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      stats: { likes: "28.4K", posts: 198, views: "132.6K" },
      hasStory: false,
    },
  ];

  return (
    <div className="cards">
      {profiles.map(function(profile){
        return <Card key={profile.id} profile={profile} />
      })}
    </div>
  );
};

export default App;
