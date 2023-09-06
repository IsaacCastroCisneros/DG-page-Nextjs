import cartItem from "@/interfaces/cartItem";

export default function getTotal(cart:Array<cartItem>)
{
   return cart.reduce((tot, el) => {
    return tot + Number(el.precio.final);
  }, 0);
}