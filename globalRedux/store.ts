'use client'
import { configureStore } from "@reduxjs/toolkit"
import counterReduser from '@/globalRedux/features/counter/counterSlice'
import cartReduser from '@/globalRedux/features/cart/cartSlice'
export const store = configureStore({
    reducer: {
      counter: counterReduser,
      cart: cartReduser
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch