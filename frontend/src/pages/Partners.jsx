import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'Google', icon: 'fa-brands fa-google' },
    { name: 'Reddit', icon: 'fa-brands fa-reddit' },
    { name: 'Facebook', icon: 'fa-brands fa-facebook' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter' },,
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
    { name: 'YouTube', icon: 'fa-brands fa-youtube' },
    { name: 'Snapchat', icon: 'fa-brands fa-snapchat-square' },
    { name: 'Pinterest', icon: 'fa-brands fa-pinterest' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram' },
    { name: 'Slack', icon: 'fa-brands fa-slack' },
    { name: 'Stripe', icon: 'fa-brands fa-stripe' },

  ];

  return (
    <section id='partners' className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 py-10 px-4 text-center overflow-hidden h-[300px]">
      <h2 className="text-3xl font-bold text-white mb-6">Join Our Esteemed Partners</h2>
      <p className="text-gray-200 mb-10">
        Collaborate with industry leaders and be part of a thriving community.
      </p>
      <div className="relative w-full overflow-x-hidden">
        <div className="animate-scroll flex space-x-16 px-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white"
            >
              <i className={`${partner.icon} text-4xl mb-3`}></i>
              <span className="font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
