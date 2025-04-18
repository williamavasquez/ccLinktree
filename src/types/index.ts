export type LinkType = "url" | "phone" | "email" | "text" | "section";

export interface Link {
  id: string;
  title: string;
  url?: string;
  type?: LinkType;
  icon?: string;
  subLinks?: Link[];
  isExpanded?: boolean;
  description?: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
  backgroundImage: string;
  links: Link[];
  socialLinks: {
    spotify?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}
