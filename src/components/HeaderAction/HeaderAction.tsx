interface HeaderActionProps {
  children: React.ReactNode;
}

const HeaderAction = ({ children, ...props }: HeaderActionProps) => {
  return <div className="mb-4 flex justify-end gap-2">{children}</div>;
};

export default HeaderAction;
