export const CustomArrow = (props:any) => 
{
  const {direction,onClick,big=false,inside=false} = props;

  let settings:{icon:string,direction:string}={icon:'',direction:''} 

  if(direction==='left') settings={icon:'fi fi-sr-caret-left',direction:`left-0 ${inside ? '':'translate-x-[-80%]'}`}
  if(direction==='rite') settings={icon:'fi fi-sr-caret-right',direction:`right-0 ${inside ? '':'translate-x-[80%]'}`}

  return (
    <div
      onClick={onClick}
      className={`absolute hover:opacity-[.8] ${settings.direction} top-[50%] translate-y-[-50%] z-[999] text-borderGrey ${big ? 'text-[3rem]':'text-[1.8rem]'}  cursor-pointer`}
    >
      <i className={settings.icon}></i>
    </div>
  );
}