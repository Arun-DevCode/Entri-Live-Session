import React from "react";
import MenuErrorUI from "../error/menu";

const menus = [
  {
    id: "item-1",
    name: "Classic Cheeseburger",
    category: "Main Course",
    price: 12.99,
    description:
      "Angus beef patty with cheddar cheese, lettuce, tomato, and house sauce on a brioche bun.",
    isAvailable: true,
    allergens: ["dairy", "gluten"],
  },
  {
    id: "item-2",
    name: "Margherita Pizza",
    category: "Main Course",
    price: 14.5,
    description:
      "San Marzano tomato sauce, fresh mozzarella, and basil leaves.",
    isAvailable: true,
    allergens: ["dairy", "gluten"],
  },
  {
    id: "item-3",
    name: "Caesar Salad",
    category: "Appetizers",
    price: 9.25,
    description:
      "Crisp romaine lettuce, parmesan cheese, croutons, and classic Caesar dressing.",
    isAvailable: true,
    allergens: ["dairy", "gluten", "fish"],
  },
  {
    id: "item-4",
    name: "Tiramisu",
    category: "Desserts",
    price: 7.0,
    description:
      "Traditional Italian dessert made with espresso-soaked ladyfingers and mascarpone cream.",
    isAvailable: false,
    allergens: ["dairy", "gluten", "eggs"],
  },
];

function MenuSection() {
  return (
    <div>
      {menus && menus.length > 0 ? (
        menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="max-w-xs mx-auto my-8 p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-zinc-900 tracking-tight">
                  {menu.name}
                </h3>
                <span className="text-sm font-semibold text-zinc-900 bg-zinc-50 px-2.5 py-1 rounded-full border border-zinc-100 shrink-0">
                  {menu.price}
                </span>
              </div>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                {menu.description}
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                <div
                  className={`${menu.isAvailable ? "text-emerald-600" : "text-red-600"} flex items-center gap-1.5 font-medium `}
                >
                  <span
                    className={`${menu.isAvailable ? " bg-emerald-600" : "bg-red-600"} h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse`}
                  />
                  {menu.isAvailable ? "Available" : "Not available"}
                </div>
                <div className="flex items-center gap-1 text-zinc-400">
                  <span className="uppercase tracking-wider font-medium text-[10px]">
                    Contains:
                  </span>
                  <span className="capitalize text-zinc-600 font-medium">
                    dairy, gluten
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <MenuErrorUI />
      )}
    </div>
  );
}

export default MenuSection;
