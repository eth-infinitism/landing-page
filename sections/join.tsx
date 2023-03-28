import React from 'react';
import SocialLinks from '@components/SocialLinks';

const Join = () => {
  return (
    <section className="w-full text-center pb-80">
      <h1 className="font-bold text-2xl mb-4">Join the conversation</h1>
      <p>It takes a village to make an EIP a reality, and luckily our village is global and highly motivated</p>
      <div className="container mx-auto justify-center">      
        <SocialLinks />
    </div>
    </section>
  );
};

export default Join;
