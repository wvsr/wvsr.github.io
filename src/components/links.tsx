import {
  type IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string; name: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:barisamiw@gmail.com',
      name: 'Gmail',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/wvsr',
      name: 'Github',
    },
    {
      icon: SiLinkedin,
      href: 'https://linkedin.com/in/wasimul-vari-sami',
      name: 'Linkedin',
    },
  ]

  return (
    <div className="mr-auto flex w-full flex-wrap items-center gap-5">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href} aria-label={link.name}>
            <link.icon className="h-6 w-6" />
          </a>
        )
      })}
    </div>
  )
}
