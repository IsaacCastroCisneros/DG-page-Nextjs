import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import options from "../interfaces/options";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const options: Array<options> =
  [
    {
      label: 'inicio',
      href: '/'
    },
    {
      label: 'cursos',
      icon:<FontAwesomeIcon icon={faChevronDown} />
    },
    {
      label: 'diplomas',
      icon:<FontAwesomeIcon icon={faChevronDown} />
    },
    {
      label: 'diplomados',
      href: '/diplomados'
    },
    {
      label: 'inHouse',
      href: '/inHouse'
    },
    {
      label: 'seminarios',
      href: '/seminarios'
    },
    {
      label: 'contactenos',
      href: '/contactenos'
    },
    {
      label: 'blog',
      href: 'https://blog.desarrolloglobal.pe/'
    },
  ]

