import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function SocialLinks() {
  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiMail, href: '#', label: 'Email' }
  ];

  return (
    <div className="flex gap-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-[#81B29A] hover:text-[#E07A5F] transform hover:scale-110"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
} 