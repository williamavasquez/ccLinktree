export type LinkType = "url" | "phone" | "email" | "text" | "section";

export interface Link {
  id: string;
  title: string;
  url?: string;
  urlEs?: string; // Spanish URL
  type?: LinkType;
  icon?: string;
  subLinks?: Link[];
  isExpanded?: boolean;
  description?: string;
}

export interface Profile {
  name: string;
  name2: string;
  bio: string;
  avatar: string;
  backgroundImage: string;
  links: Link[];
  socialLinks: {
    twitter: string;
    facebook: string;
    instagram: string;
    spotify: string;
  };
}
