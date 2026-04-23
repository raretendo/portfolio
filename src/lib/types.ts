export type Project = {
    name: string;
    image?: {
        src: string;
        alt: string;
    };
    description: string;
    repoLink: string;
    link: string;
    technologies: {
        name: string;
        icon: React.ReactElement;
    }[];
};