import { Ingredient } from "@/types/tab";

export const allIngredients: Ingredient[] = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

export const initialTabs = allIngredients.slice(0, 3);
export const findNextIngredient = (
  ingredients: Ingredient[]
): Ingredient | undefined => {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
};
