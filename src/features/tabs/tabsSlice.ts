import { createSlice } from '@reduxjs/toolkit'

type tabsType = {
  current: string
}

const initialState: tabsType = {
  current: '/focus'
}

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setCurrent } = tabsSlice.actions

export default tabsSlice.reducer