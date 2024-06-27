import * as React from "react";
import "../styles/global.css";

const About = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          About GeeksforGeeks is a popular online learning platform that
          provides computer science students, software engineers, and other tech
          professionals with a wide range of resources to enhance their coding
          skills and knowledge. It offers a variety of resources, including
          articles, coding challenges, video tutorials, online courses, and
          interview preparation materials. The platform covers a wide range of
          topics in computer science, including algorithms, data structures,
          programming languages, software development, machine learning, and
          more.
        </div>
      </div>
    </div>
  );
};

export default About;
