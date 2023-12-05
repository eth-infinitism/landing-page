import { IPartnerItem, PartnerItems } from '@configs/home/partner';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';



const PartnerModal = ({ partner, onClose }: { partner: IPartnerItem; onClose: () => void }) => (
  <div className="modal-overlay">
    <div className="modal">
      <button className="modal-close" onClick={onClose}>
        X
      </button>
      <div className="partner-logo">
        <Image src={partner.logo} alt="logo" width={100} height={100} />
      </div>
      <h2 className="partner-name">{partner.name}</h2>
      <p className="partner-description">{partner.description}</p>
      <a href={partner.link} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  </div>
);

const Partner = () => {

  const [selectedPartner, setSelectedPartner] = useState<IPartnerItem | null>(null);

  const openModal = (partner: IPartnerItem) => {
    setSelectedPartner(partner);
  };

  const closeModal = () => {
    setSelectedPartner(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
  <section className="w-full text-center relative">
    <div className="absolute -left-44 -top-1/2 w-[2000px] h-96  -z-10 bg-pink -skew-y-6" />
    <div className="absolute -left-44 -top-1/2 w-[2000px] h-[1500px]  -z-20 bg-green skew-y-6 overflow-visible" />

    <h1 className="title">Members of the 4337 Revolution</h1>
    <div className="mx-auto w-2/3 flex flex-wrap gap-y-12 gap-x-12 flex-row justify-evenly mt-20">
    {PartnerItems.map((partner, index) => (
          <div key={index} className="partner-item" onClick={() => openModal(partner)}>
            <Image src={partner.logo} alt="logo" width={100} height={100} className="drop-shadow-lg" />
          </div>
        ))}
    </div>
    {selectedPartner && <PartnerModal partner={selectedPartner} onClose={closeModal} />}

  </section>
  );
};
export default Partner;
