'use client'

import options from '../interfaces/options';
import { NavBarOption } from './NavBarOption';

export const NavbarOptionList=({options}:{options:Array<options>})=>
{
  return (
    <>
      <ul className="flex gap-[1rem] nav-bar:hidden">
        {options.map((opt, pos) => (
          <NavBarOption
            key={pos}
            {...opt}
          />
        ))}
      </ul>
    </>
  );
}

