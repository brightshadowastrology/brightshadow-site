"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

const STORAGE_KEY = "bss_cart";

export interface NatalData {
  date: string;
  time: string;
  location: string;
}

export interface CartItem {
  id: string;
  name: string;
  kicker?: string;
  price: number;
  description?: string;
  imageSrc?: string;
  quantity: number;
  natalData?: NatalData;
  stripeProductId: string;
  stripePriceId: string;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "INCREMENT"; payload: { id: string } }
  | { type: "DECREMENT"; payload: { id: string } }
  | { type: "UPDATE_NATAL_DATA"; payload: { id: string; natalData: NatalData } }
  | { type: "CLEAR" };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log("Adding item to cart:", action.payload);
      const existing = state.find((i) => i.id === action.payload.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((i) => i.id !== action.payload.id);
    case "INCREMENT":
      return state.map((i) =>
        i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i,
      );
    case "DECREMENT":
      return state
        .map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity - 1 } : i,
        )
        .filter((i) => i.quantity > 0);
    case "UPDATE_NATAL_DATA":
      return state.map((i) =>
        i.id === action.payload.id
          ? { ...i, natalData: action.payload.natalData }
          : i,
      );
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  updateNatalData: (id: string, natalData: NatalData) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [], () => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value: CartContextValue = {
    items,
    addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } }),
    increment: (id) => dispatch({ type: "INCREMENT", payload: { id } }),
    decrement: (id) => dispatch({ type: "DECREMENT", payload: { id } }),
    updateNatalData: (id, natalData) =>
      dispatch({ type: "UPDATE_NATAL_DATA", payload: { id, natalData } }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
