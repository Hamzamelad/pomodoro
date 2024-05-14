import NonLinearSlider from "../../components/slider";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setLong } from "./timeSlice";
import { FC } from "react";

const LongSlider: FC = () => {
  const dispatch = useAppDispatch();
  const long = useAppSelector((state) => state.time.longBreak);
  return (
    <NonLinearSlider
      label={"long break"}
      value={long}
      setValue={(v) => dispatch(setLong(v))}
    />
  );
};

export default LongSlider;
