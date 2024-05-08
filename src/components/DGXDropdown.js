import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useClickOutside from "../hooks/useClickOutside";
import { PlaceHolder } from "../mock/constant";

const DropDown = (props) => {
  const [showList, setShowList] = useState(false);
  const [result, setResult] = useState();
  const ref = useRef(null);
  const handleClickOutside = () => {
    setShowList(false);
  };
  useClickOutside(ref, handleClickOutside);

  const handleClick = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    if (props.value) {
      setResult(props.options.find((item) => item.key === props.value));
    }
  }, [props.value, props.options]);

  return (
    <div className="drop-down" ref={ref}>
      <div
        className={clsx("input size text color", {
          active: showList,
        })}
        onClick={() => handleClick()}
      >
        {result?.name || PlaceHolder}
      </div>
      {showList && (
        <div className="list size color">
          {props.options.map((item) => {
            const selectItem = (item) => {
              setShowList(false);
              props.onChange(item.key);
            };
            return (
              <span key={item.key} onClick={() => selectItem(item)}>
                {props.children(item)}
              </span>
            );
          })}
        </div>
      )}
      ;
    </div>
  );
};

export default DropDown;
