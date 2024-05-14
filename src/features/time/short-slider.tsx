import NonLinearSlider from "../../components/slider";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setShrot } from "./timeSlice";
import { FC } from "react";

const ShortSlider: FC = () => {
  const dispatch = useAppDispatch();
  const shortBreak = useAppSelector((state) => state.time.shortBreak);
  return (
    <NonLinearSlider
      label={"short break"}
      value={shortBreak}
      setValue={(v) => dispatch(setShrot(v))}
    />
  );
};

export default ShortSlider;
