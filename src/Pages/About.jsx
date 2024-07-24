import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About the Presidential Voting Platform
        </h1>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Welcome to the official voting platform for the Presidential
            Election of Somalia. This website is designed to facilitate the
            democratic process by providing a transparent, accessible, and
            user-friendly interface for all eligible voters. Our mission is to
            ensure that every voice is heard and every vote is counted in a fair
            and efficient manner.
          </p>
          <p>
            This platform allows you to learn about the candidates running for
            the highest office in Somalia. Each candidate's profile includes
            detailed information about their background, political vision, and
            plans for the future of our country. By reviewing these profiles,
            voters can make informed decisions that reflect their aspirations
            for Somalia.
          </p>
          <p>
            The voting process is straightforward. Simply navigate to the home
            page, review the candidates, and cast your vote for the leader you
            believe will best serve our nation. Your vote is crucial in shaping
            the future of Somalia, and we encourage all eligible citizens to
            participate in this important democratic exercise.
          </p>
          <p>
            We are committed to maintaining the integrity of the voting process.
            Measures have been put in place to ensure that each voter can only
            vote once, and all votes are securely recorded and counted. If you
            have any questions or encounter any issues while using this
            platform, please do not hesitate to contact our support team for
            assistance.
          </p>
          <p>
            Thank you for your participation and for exercising your democratic
            right. Together, we can build a brighter future for Somalia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
