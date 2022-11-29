import {Card} from "../Card/Card";
import React, {FC, Ref} from "react";
import './Products.scss'
import {Cart, MotorcycleElement, Motorcycles, Notify, Orders} from '../../Types'
import {useSelector} from "react-redux";

export interface ProductsProps {
    filtered: any
    cart: Cart
    setCart: Function
    motorcycles: Motorcycles
    setMotorcycles: Function
}

export const Products: FC<ProductsProps> = ({filtered, cart, setCart, motorcycles, setMotorcycles}) => {
    const {cache} = useSelector((state: any) => state.cache)

    return (
        <div className='Products'>
            {filtered.map((i: MotorcycleElement) => (
                <Card
                    key={i.id}
                    img={cache["./" + i.img]}
                    color={i.color}
                    brand={i.brand}
                    model={i.model}
                    price={i.price}
                    id={i.id}
                    cart={cart}
                    setCart={setCart}
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                    number={i.number}
                />
            ))}
        </div>
    )
}