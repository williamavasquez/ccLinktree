import { Profile, Link, LinkType } from "./types";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaPhone,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useState } from "react";

const profile: Profile = {
  name: "KNOW YOUR PATIENTS' RIGHTS: PROVIDER RESOURCES",
  bio: "Resources for providers working with immigrants",
  avatar: "/supportButterfly.png", // Replace with actual image
  backgroundImage: "bgimage.jpg",
  links: [
    {
      id: "1",
      title: "Protecting our Patients",
      type: "section",
      subLinks: [
        {
          id: "1-1",
          title: "Know Your Rights",
          type: "url",
          url: "https://www.ilrc.org/red-cards-tarjetas-rojas",
          description: "Learn about your rights and protections",
        },
        {
          id: "1-2",
          title: "Create family preparedness plans",
          type: "url",
          url: "https://www.ilrc.org/resources/step-step-family-preparedness-plan",
          description: "Step-by-step guide for family planning",
        },
        {
          id: "1-3-1",
          title: "Santa Clara County Rapid Response Hotline:",
          type: "phone",
          url: "tel:2036664472",
          description: "Tel: 408-290-1144",
        },
      ],
    },
    {
      id: "2",
      title: "Legal Aid",
      type: "section",
      subLinks: [
        {
          id: "2-1",
          title: "Immigration Institute of the Bay Area",
          type: "url",
          url: "https://iibayarea.org/services/consultations/",
          description: "Free immigration consultations and legal services",
        },
        {
          id: "2-2",
          title: "Bay Area Legal Aid",
          type: "url",
          url: "https://baylegal.org/legal-areas/immigration/",
          description: "Immigration legal assistance and resources",
        },
        {
          id: "2-3",
          title: "National Immigration Legal Services",
          type: "url",
          url: "https://www.immigrationadvocates.org/legaldirectory/",
          description: "Directory of immigration legal service providers",
        },
      ],
    },
    {
      id: "3",
      title: "Practical Resources",
      type: "section",
      subLinks: [
        {
          id: "3-1",
          title: "Second Harvest Food Bank",
          type: "url",
          url: "https://www.shfb.org/get-food/",
          description: "Access food assistance and distribution locations",
        },
        {
          id: "3-2",
          title: "Catholic Charities Food Distribution",
          type: "url",
          url: "https://www.ccscc.org/free-food-distribution?locale=en",
          description: "Free food distribution services",
        },
        {
          id: "3-3",
          title: "La Raza Community Resource Center",
          type: "url",
          url: "https://www.larazacrc.org/programs-services",
          description: "Comprehensive community services and programs",
        },
        {
          id: "3-4",
          title: "Bay Area Community Services",
          type: "url",
          url: "https://bayareacs.org/what-we-do/#",
          description: "Support services for Bay Area residents",
        },
        {
          id: "3-5",
          title: "Enrolling in MediCal regardless of immigration status",
          type: "url",
          url: "https://www.coveredca.com/learning-center/information-for-immigrants/",
          description: "Healthcare coverage regardless of immigration status",
        },
        {
          id: "3-6",
          title: "Psychosocial support from Kids in Need of Defense",
          type: "url",
          url: "https://supportkind.org/what-we-do/social-services/",
          description: "Mental health and social support services for children",
        },
      ],
    },
  ],
  socialLinks: {
    twitter: "#",
    facebook: "#",
    instagram: "#",
    spotify: "#",
  },
};

const SocialIcon = ({ platform, url }: { platform: string; url: string }) => {
  const icons = {
    twitter: FaTwitter,
    facebook: FaFacebook,
    instagram: FaInstagram,
    spotify: FaSpotify,
  };

  const Icon = icons[platform as keyof typeof icons];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-link"
    >
      <Icon className="social-icon" />
    </a>
  );
};

interface LinkButtonProps {
  link: Link;
  isNested?: boolean;
  onToggle?: (id: string) => void;
  isExpanded?: boolean;
  expandedLinks?: Set<string>;
}

const LinkButton = ({
  link,
  isNested = false,
  onToggle,
  isExpanded,
  expandedLinks = new Set(),
}: LinkButtonProps) => {
  const hasSubLinks = link.subLinks && link.subLinks.length > 0;

  const handleClick = () => {
    if (hasSubLinks && onToggle) {
      onToggle(link.id);
    } else if (link.url) {
      switch (link.type) {
        case "phone":
          window.location.href = link.url;
          break;
        case "email":
          window.location.href = link.url;
          break;
        case "url":
        default:
          window.open(link.url, "_blank");
          break;
      }
    }
  };

  const getIcon = (type?: LinkType) => {
    switch (type) {
      case "phone":
        return <FaPhone className="inline-block w-4 h-4 mr-2" />;
      case "url":
        return <FaExternalLinkAlt className="inline-block w-4 h-4 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className={`${isNested ? "ml-4" : ""}`}>
      <button
        onClick={handleClick}
        className={`torn-paper-button w-full text-left ${
          hasSubLinks || link.url ? "cursor-pointer" : ""
        } ${isNested ? "nested-button" : ""}`}
        data-type={link.type}
      >
        <div className="flex items-center">
          {getIcon(link.type)}
          <span>{link.title}</span>
        </div>
        {link.description && (
          <div className="text-sm opacity-75 mt-1">{link.description}</div>
        )}
      </button>
      {hasSubLinks && isExpanded && (
        <div className="mt-2 space-y-2 animate-fadeIn">
          {link.subLinks?.map((subLink) => (
            <LinkButton
              key={subLink.id}
              link={subLink}
              isNested={true}
              onToggle={onToggle}
              expandedLinks={expandedLinks}
              isExpanded={expandedLinks.has(subLink.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  const [expandedLinks, setExpandedLinks] = useState<Set<string>>(new Set());

  const toggleLink = (id: string) => {
    setExpandedLinks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <main className="min-h-screen w-full bg-[#acdde0] relative overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#F5DEB3] bg-[#acdde0]">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#19aea0] mb-2">
            {profile.name}
          </h1>
          <p className="text-[#19aea0]/90 mb-6">{profile.bio}</p>

          {/* Social Links */}
          {/* <div className="flex justify-center gap-6 mb-8">
            {Object.entries(profile.socialLinks).map(([platform, url]) => (
              <SocialIcon key={platform} platform={platform} url={url} />
            ))}
          </div> */}
        </div>

        {/* Links Section */}
        <div className="w-full max-w-md space-y-4">
          {profile.links.map((link) => (
            <LinkButton
              key={link.id}
              link={link}
              onToggle={toggleLink}
              expandedLinks={expandedLinks}
              isExpanded={expandedLinks.has(link.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
