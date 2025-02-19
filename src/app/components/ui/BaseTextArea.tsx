import {
  __InputStylesNames,
  Textarea,
  TextareaProps,
  TextStylesNames,
} from "@mantine/core";
import clsx from "clsx";
import { FC } from "react";

type IBaseTextAreaProps = TextareaProps & {
  classNames?: Partial<Record<__InputStylesNames, string>>;
};

const BaseTextArea: FC<IBaseTextAreaProps> = (props) => {
  const { classNames, disabled, ...other } = props;
  const { input, ...otherElement } = classNames || {};
  return (
    <Textarea
      classNames={{
        ...classNames,
        input: clsx(
          "bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          {
            "mb-6  text-sm rounded-lg block w-full p-2.5 cursor-not-allowed":
              disabled,
          },
          input
        ),
        ...otherElement,
      }}
      {...other}
    ></Textarea>
  );
};

export default BaseTextArea;
