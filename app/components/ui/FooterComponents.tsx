import React from "react";
import Link from "next/link";

export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {icon}
    </a>
  );
};

export interface SocialLinksProps {
  links: SocialLinkProps[];
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  className = "",
}) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link, index) => (
        <SocialLink key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
};

export interface FooterLinkProps {
  href: string;
  label: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

export interface LinkGroupProps {
  title: string;
  links: FooterLinkProps[];
}

export const LinkGroup: React.FC<LinkGroupProps> = ({ title, links }) => {
  return (
    <div className="col-span-1">
      <h4 className="font-inter font-semibold text-sm uppercase tracking-wider mb-4">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href} label={link.label} />
        ))}
      </ul>
    </div>
  );
};
