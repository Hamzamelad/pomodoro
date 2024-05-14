import { createContext, useContext } from 'react';

const TimeContext = createContext<any>(null);
export const useTimeContext = () => useContext(TimeContext)

export default function TimeProvider({children}: any) {
  
  return (
    <TimeContext.Provider value={null}>
      {children}
    </TimeContext.Provider>
  )
}