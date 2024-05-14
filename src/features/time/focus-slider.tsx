import NonLinearSlider from "../../components/slider";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFocus } from "./timeSlice";
import { FC } from "react";

const FocusSlider: FC = () => {
  const dispatch = useAppDispatch();
  const focus = useAppSelector((state) => state.time.focus);
  return (
    <NonLinearSlider
      label={"focus"}
      value={focus}
      setValue={(v) => dispatch(setFocus(v))}
    />
  );
};

export default FocusSlider;
