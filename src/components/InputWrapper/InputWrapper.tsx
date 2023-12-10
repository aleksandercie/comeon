type InputWrapperType = {
  children: JSX.Element[];
  required: boolean;
  isMobile?: boolean;
};
const InputWrapper = ({ children, required, isMobile }: InputWrapperType) =>
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
