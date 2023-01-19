import { ILinkItem, Links, SectionIDs } from '@utils/constants';
import Link from 'next/link';
import React from 'react';

const LinkItem = ({ name, url }: ILinkItem) => {
  return (
    <Link className="text-white" href={url}>
      {name}
    </Link>
  );
};

export default function Footer() {
  return (
    <div id={SectionIDs.why} className="flex flex-row gap-5 bottom-0 h-22 border-t border-[#474747] py-5 px-64 mt-28">
      {Links.map(link => (
        <LinkItem {...link} key={link.name} />
      ))}
    </div>
  );
}
