type InputWrapperType = {
  children: JSX.Element[];
  required: boolean;
};
const InputWrapper = ({ children, required }: InputWrapperType) =>
  required ? (
    <div className="field required">
      <div className="ui icon input">{children}</div>
    </div>
  ) : (
    <div className="search ui small icon input ">{children}</div>
  );

export default InputWrapper;
