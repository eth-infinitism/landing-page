import React from 'react';
import { FaTwitter, FaTelegramPlane, FaDiscord, FaStackExchange } from 'react-icons/fa';



const SocialLinks = () => {
    return (
      <div className="mx-auto w-1/2 flex flex-wrap gap-y-4 gap-x-4 flex-row justify-evenly mt-20">
        <a
          href="https://twitter.com/erc4337"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
            <FaTwitter size="2.5em" />
          <span>@erc4337</span>
        </a>
        <a
          href="https://twitter.com/4337Mafia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
            <FaTwitter size="2.5em" />
          <span>@4337Mafia</span>
        </a>
        <a
          href="https://t.me/+inkp65xNaNI5OTlh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
        <FaTelegramPlane size="2.5em" />
          <span>4337 Mafia</span>
        </a>
        <a
          href="https://t.me/+5VmAcF77c6k0M2M9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
        <FaTelegramPlane size="2.5em" />
          <span>ERC-4337 Fan Club</span>
        </a>                
        <a
          href="https://t.me/+aIMWB_k4hxU0MzVk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
        <FaTelegramPlane size="2.5em" />
          <span>Trampoline</span>
        </a>        
        <a
          href="https://discord.gg/cXSpMUpWnC"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
        <FaDiscord size="2.5em" />
          <span>Infinitism</span>
        </a>
        <a
          href="https://ethereum.stackexchange.com/questions/tagged/smart-contract-wallets"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
        <FaStackExchange size="2.5em" />
          <span>Smart Contract Wallets</span>
        </a>
      </div>
    );
  };
  
  export default SocialLinks;
  