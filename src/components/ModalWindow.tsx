import React, { FC, ReactNode } from "react";
import cn from "classnames";

const ALT_TEXT_IMG = "GIF";

interface Props {
  isOpenModal: boolean;
  onCloseModal: VoidFunction;
  children?: ReactNode;
}

export const ModalWindow: FC<Props> = ({
  children,
  isOpenModal,
  onCloseModal,
}) => {
  return (
    <div className={cn("overlay animated", { show: isOpenModal })}>
      <div className="modal">
        <svg
          onClick={onCloseModal}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children || (
          <img
            src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
            alt={ALT_TEXT_IMG}
          />
        )}
      </div>
    </div>
  );
};
