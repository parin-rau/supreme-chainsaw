const commonStyles =
  "text-sm sm:text-base rounded-md border px-2 shadow-sm bg-inherit border-inherit";

type Props = {
  name: string;
  value: string;
  onChange: (..._args: unknown[]) => unknown;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  isTextarea?: boolean;
};

export function StyledInput(props: Props) {
  return props.isTextarea ? (
    <textarea {...{ ...props, className: commonStyles }} />
  ) : (
    <input {...{ ...props, className: commonStyles }} />
  );
}
