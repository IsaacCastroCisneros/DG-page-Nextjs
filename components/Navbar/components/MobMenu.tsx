import React, { SetStateAction } from 'react'
import Image from 'next/image';
import { options } from '../helpers/options';
import { MobMenuOption } from './MobMenuOption';
import LoginSignup from '@/components/LoginSignup/LoginSignup';

export const MobMenu = ({
  setShow,
  show,
}: {
  setShow: React.Dispatch<SetStateAction<boolean>>;
  show: boolean;
}) => {
  return (
    <nav
      className={`fixed left-0 bg-[#fff] hidden nav-bar:block top-0 transition-all duration-200 ${
        show ? "translate-x-[0]" : "translate-x-[-100%]"
      } w-[375px] h-[100%] py-[.8rem] px-[1rem] overflow-y-auto z-[9999999]`}
    >
      <div className="flex justify-between mb-[2rem]">
        <Image
          src="/DG-Logotipo_Color.webp"
          alt="DG-logo"
          width={180}
          height={43}
        />
        <button onClick={() => setShow(false)}>X</button>
      </div>
      <ul className="flex flex-col gap-[.8rem]">
        {options.map((opt, pos) => (
          <MobMenuOption
            key={pos}
            options={opt}
            setShow={setShow}
            show={show}
          />
        ))}
        <div onClick={() => setShow(false)}>
          <LoginSignup/>
        </div>
      </ul>
    </nav>
  );
};
