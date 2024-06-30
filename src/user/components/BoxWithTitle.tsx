import { FC, HTMLAttributes, PropsWithChildren } from 'react';

type BoxWithTitleProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren & {
    headingText: string;
  };

const BoxWithTitle: FC<BoxWithTitleProps> = ({
  children,
  headingText,
  ...rest
}) => {
  return (
    <div {...rest}>
      <h2>{headingText}</h2>
      {children}
    </div>
  );
};

export default BoxWithTitle;
