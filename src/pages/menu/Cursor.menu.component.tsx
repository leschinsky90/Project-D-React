interface ICursorMenuComponentProps {
  cursorState: number;
}

export const CursorMenuComponent = ({
  cursorState,
}: ICursorMenuComponentProps) => (
  <div className={`tankCursor${cursorState}`}></div>
);
