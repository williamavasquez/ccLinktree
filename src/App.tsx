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

// English and Spanish translations
type TranslationKey =
  | "1"
  | "1-1"
  | "1-1-desc"
  | "1-2"
  | "1-2-desc"
  | "1-3-1"
  | "1-3-1-desc"
  | "2"
  | "2-1"
  | "2-1-desc"
  | "2-2"
  | "2-2-desc"
  | "2-3"
  | "2-3-desc"
  | "3"
  | "3-1"
  | "3-1-desc"
  | "3-2"
  | "3-2-desc"
  | "3-3"
  | "3-3-desc"
  | "3-4"
  | "3-4-desc"
  | "3-5"
  | "3-5-desc"
  | "3-6"
  | "3-6-desc";

type TranslationsType = {
  [key in "en" | "es"]: {
    name: string;
    bio: string;
    languageButton: string;
    sections: {
      [key in TranslationKey]: string;
    };
  };
};

const translations: TranslationsType = {
  en: {
    name: "KNOW YOUR PATIENTS' RIGHTS: PROVIDER RESOURCES",
    bio: "Resources for providers working with immigrants",
    languageButton: "Español",
    sections: {
      "1": "Protecting our Patients",
      "1-1": "Know Your Rights",
      "1-1-desc": "Learn about your rights and protections",
      "1-2": "Create family preparedness plans",
      "1-2-desc": "Step-by-step guide for family planning",
      "1-3-1": "Santa Clara County Rapid Response Hotline:",
      "1-3-1-desc": "Tel: 408-290-1144",
      "2": "Legal Aid",
      "2-1": "Immigration Institute of the Bay Area",
      "2-1-desc": "Free immigration consultations and legal services",
      "2-2": "Bay Area Legal Aid",
      "2-2-desc": "Immigration legal assistance and resources",
      "2-3": "National Immigration Legal Services",
      "2-3-desc": "Directory of immigration legal service providers",
      "3": "Practical Resources",
      "3-1": "Second Harvest Food Bank",
      "3-1-desc": "Access food assistance and distribution locations",
      "3-2": "Kids in Need of Defense - Psychosocial Support",
      "3-2-desc": "Mental health and social support services for children",
      "3-3": "MediCal Enrollment Information",
      "3-3-desc": "Healthcare coverage regardless of immigration status",
      "3-4": "La Raza Community Resource Center",
      "3-4-desc": "Comprehensive community services and programs",
      "3-5": "Bay Area Community Services",
      "3-5-desc": "Support services for Bay Area residents",
      "3-6": "Catholic Charities Food Distribution",
      "3-6-desc": "Free food distribution services",
    },
  },
  es: {
    name: "CONOZCA LOS DERECHOS DE SUS PACIENTES: RECURSOS PARA PROVEEDORES",
    bio: "Recursos para proveedores que trabajan con inmigrantes",
    languageButton: "English",
    sections: {
      "1": "Protegiendo a Nuestros Pacientes",
      "1-1": "Conozca Sus Derechos",
      "1-1-desc": "Aprenda sobre sus derechos y protecciones",
      "1-2": "Crear planes de preparación familiar",
      "1-2-desc": "Guía paso a paso para la planificación familiar",
      "1-3-1": "Línea Directa de Respuesta Rápida del Condado de Santa Clara:",
      "1-3-1-desc": "Tel: 408-290-1144",
      "2": "Ayuda Legal",
      "2-1": "Instituto de Inmigración del Área de la Bahía",
      "2-1-desc": "Consultas gratuitas de inmigración y servicios legales",
      "2-2": "Ayuda Legal del Área de la Bahía",
      "2-2-desc": "Asistencia legal de inmigración y recursos",
      "2-3": "Servicios Legales Nacionales de Inmigración",
      "2-3-desc":
        "Directorio de proveedores de servicios legales de inmigración",
      "3": "Recursos Prácticos",
      "3-1": "Banco de Alimentos Second Harvest",
      "3-1-desc":
        "Acceso a asistencia alimentaria y ubicaciones de distribución",
      "3-2": "Kids in Need of Defense - Apoyo Psicosocial",
      "3-2-desc": "Servicios de salud mental y apoyo social para niños",
      "3-3": "Información de Inscripción a MediCal",
      "3-3-desc": "Cobertura médica sin importar su estatus migratorio",
      "3-4": "Centro de Recursos Comunitarios La Raza",
      "3-4-desc": "Servicios y programas comunitarios integrales",
      "3-5": "Servicios Comunitarios del Área de la Bahía",
      "3-5-desc": "Servicios de apoyo para residentes del Área de la Bahía",
      "3-6": "Distribución de Alimentos de Caridades Católicas",
      "3-6-desc": "Servicios gratuitos de distribución de alimentos",
    },
  },
};

const profile: Profile = {
  name: "KNOW YOUR PATIENTS' RIGHTS: PROVIDER RESOURCES",
  bio: "Resources for providers working with immigrants",
  avatar: "/supportButterfly.png",
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
          title: "San Mateo County Rapid Response Hotline",
          type: "phone",
          url: "tel:2036664472",
          description: "24/7 Emergency Hotline",
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
          title: "Kids in Need of Defense - Psychosocial Support",
          type: "url",
          url: "https://supportkind.org/what-we-do/social-services/",
          description: "Mental health and social support services for children",
        },
        {
          id: "3-3",
          title: "MediCal Enrollment Information",
          type: "url",
          url: "https://www.coveredca.com/learning-center/information-for-immigrants/",
          description: "Healthcare coverage regardless of immigration status",
        },
        {
          id: "3-4",
          title: "La Raza Community Resource Center",
          type: "url",
          url: "https://www.larazacrc.org/programs-services",
          description: "Comprehensive community services and programs",
        },
        {
          id: "3-5",
          title: "Bay Area Community Services",
          type: "url",
          url: "https://bayareacs.org/what-we-do/#",
          description: "Support services for Bay Area residents",
        },
        {
          id: "3-6",
          title: "Catholic Charities Food Distribution",
          type: "url",
          url: "https://www.ccscc.org/free-food-distribution?locale=en",
          description: "Free food distribution services",
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
  language: "en" | "es";
}

const LinkButton = ({
  link,
  isNested = false,
  onToggle,
  isExpanded,
  expandedLinks = new Set(),
  language,
}: LinkButtonProps) => {
  const hasSubLinks = link.subLinks && link.subLinks.length > 0;
  const t = translations[language];

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

  // Get translated title and description
  const title = t.sections[link.id as TranslationKey] || link.title;
  const description = link.description
    ? t.sections[`${link.id}-desc` as TranslationKey] || link.description
    : "";

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
          <span>{title}</span>
        </div>
        {description && (
          <div className="text-sm opacity-75 mt-1">{description}</div>
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
              language={language}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  const [expandedLinks, setExpandedLinks] = useState<Set<string>>(new Set());
  const [language, setLanguage] = useState<"en" | "es">("en");

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

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const t = translations[language];

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
              alt={t.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#19aea0] mb-2">{t.name}</h1>
          <p className="text-[#19aea0]/90 mb-4">{t.bio}</p>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-1.5 bg-[#19aea0] text-white rounded-full font-medium 
                     hover:bg-[#148f83] transition-colors duration-200 mb-6 
                     shadow-md border border-[#19aea0]/30"
          >
            {t.languageButton}
          </button>

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
              language={language}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
