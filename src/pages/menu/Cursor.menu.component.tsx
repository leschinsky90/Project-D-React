interface ICursorMenuComponentProps {
  cursorState: number;
}

export const CursorMenuComponent = ({
  cursorState,
}: ICursorMenuComponentProps) => {
  const className = `tankCursor${cursorState}`;
  return <div className={className}></div>;
};
