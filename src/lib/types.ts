export type Project = {
    name: string
    image: string
    description: string
    repoLink: string
    link: string
    technologies: {
        name: string
        icon: React.ReactElement
    }[]
}