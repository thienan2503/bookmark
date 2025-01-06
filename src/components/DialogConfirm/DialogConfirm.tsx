"use client";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface ModalProps {
  title: string;
  message: string;
  open?: boolean;
  negative: {
    text?: string;
    click?: () => Promise<void>;
  };
  positive: {
    text?: string;
    click?: () => Promise<void>;
  };
}

interface ModalHandle {
  show: (props: ModalProps) => void | Promise<unknown>;
}

export const dialogRef = React.createRef<ModalHandle>();

// eslint-disable-next-line react/display-name
const DialogConfirm = forwardRef<ModalHandle>((_, ref) => {
  const [state, setState] = useState<ModalProps>({
    title: "",
    message: "",
    open: false,
    negative: {},
    positive: {},
  });

  const promiseInfo = useRef<{
    resolve?: (value: boolean) => void;
  }>({});

  useImperativeHandle(ref, () => ({
    show: (props: ModalProps) => {
      return new Promise((resolve) => {
        promiseInfo.current.resolve = resolve;
        setState({
          ...props,
          open: true,
        });
      });
    },
  }));

  const handlePositive = async () => {
    const { positive } = state;
    handleClose();
    if (positive?.click) {
      await positive.click();
    }
    promiseInfo.current.resolve?.(true);
  };

  const handleNegative = async () => {
    const { negative } = state;
    handleClose();
    if (negative?.click) {
      await negative.click();
    }
    promiseInfo.current.resolve?.(false);
  };

  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  return (
    <div>
      {state.open && (
        <div
          tabIndex={-1}
          className="fixed left-0 right-0 top-0 z-999 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-[rgba(0,0,0,.5)] md:inset-0"
        >
          <div className="relative max-h-full w-full max-w-md p-4">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="p-4  md:p-5">
                <p className="mb-5 text-lg font-bold text-gray-500 dark:text-white">
                  {state.title}
                </p>
                <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {state.message}
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handlePositive}
                    type="button"
                    className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
                  >
                    {state.positive.text || "Yes"}
                  </button>
                  <button
                    onClick={handleNegative}
                    type="button"
                    className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    {state.negative.text || "No"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default DialogConfirm;
