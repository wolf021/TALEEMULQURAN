import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import Banner from "./Components/Banner";
import {InfoPanel,InfoPanel2} from "./Components/InfoPanel";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
import InfoImg from "../../src/app/Assets/quraan.jpeg"
import InfoImg2 from "../../src/app/Assets/teach.webp"
import WhatsappButton from "./Components/WhatsappButton";
import Head from "next/head";



export default function Home() {
  const courses = [
    {
      title: "Learn Quran",
      description: "Master the recitation of the Quran with proper pronunciation and Tajweed rules.",
    },
    {
      title: "Nazra",
      description: "Study the basic reading and understanding of the Quranic text.",
    },
    {
      title: "Tajweed",
      description: "Dive deep into the rules of Tajweed to enhance your Quranic recitation.",
    },
    {
      title: "Learn Salah",
      description: "Understand the importance and method of performing Salah (prayer) according to Islamic teachings.",
    },
    {
      title: "Qirat",
      description: "Explore different styles and methods of Quranic recitation.",
    },
    {
      title: "Hifz Quran",
      description: "Memorize the entire Quran with systematic guidance and support.",
    },
    {
      title: "Arabic Language",
      description: "Learn the Arabic language to understand the Quran in its original text.",
    },
    {
      title: "Islamic Studies",
      description: "Gain a deeper understanding of Islamic beliefs, history, and practices.",
    },
    {
      title: "Hadith Studies",
      description: "Study the sayings and actions of Prophet Muhammad (PBUH) to better understand Islamic teachings.",
    },
  ];
  
  return (
    <main className="bg-gray-100">
   
      <Navbar/>
      <HeroSection/>
      <div className="bg-[url(../../src/app/Assets/bg-1.jpg)] bg-fixed " >
      <InfoPanel
       title="Personalized Quran Lessons"
       description="Tailored for students of all ages and levels, our Quran lessons provide individualized attention to ensure you learn at your own pace. Our experienced instructors guide you through reading, understanding, and appreciating the Quran."
       imageUrl={InfoImg} // Replace with your image URL
      />
       <InfoPanel2
       title="Experienced Instructors"
       description="Our team of skilled and knowledgeable teachers is dedicated to providing high-quality Quran education. With personalized lesson plans and a supportive learning environment, you'll deepen your connection with the Quran."
       imageUrl={InfoImg2} // Replace with your image URL
      />
      </div>
     
  <Banner
    title="Get 20% Off Your First Month of Quran Lessons!"
    description="Enroll today to get a 20% discount on your first month with our expert Quran instructors. Start your spiritual journey now! Limited time offer."
    buttonText="Shop Now"
    buttonLink="/shop"
    imageUrl="" // Replace with your image URL
  />
       <div className="bg-[url(../../src/app/Assets/bg-1.jpg)] bg-fixed " >
<WhatsappButton/>
<div id="courses">

  <Courses courses={courses} />
</div>
</div>
  <div id="footer">
    
  <Footer/>
  </div>
    </main>
  );
}
