import { ReactNode } from 'react';

type InputWrapperType = {
  children: ReactNode[];
  required: boolean;
  isMobile?: boolean;
};
const InputWrapper = ({
  children,
  required,
  isMobile = false,
}: InputWrapperType) =>
  required ? (
    <div className="field required">
      <div className="ui icon input">{children}</div>
    </div>
  ) : (
    <div className={`${isMobile ? '' : 'search'} ui small icon input`}>
      {children}
    </div>
  );

export default InputWrapper;
