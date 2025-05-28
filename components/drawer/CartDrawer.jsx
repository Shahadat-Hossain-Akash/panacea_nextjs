"use client"
import Drawer from "./Drawer";
import {useCart} from "@/context/CartContext";

export default function CartDrawer({children}) {
    const {isCartOpen, closeCart} = useCart();
    return (
        <Drawer isOpen={isCartOpen} onClose={closeCart} title="Cart">
            <div className={"bg-gray-50 h-full rounded-lg p-2"}>
                {children}
            </div>
        </Drawer>
    );
}
