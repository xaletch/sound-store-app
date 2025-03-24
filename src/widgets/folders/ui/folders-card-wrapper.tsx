interface FoldersCardWrapperProps {
  children?: React.ReactNode;
  cl?: string;
}

export const FoldersCardWrapper = ({ children, cl = '' }: FoldersCardWrapperProps) => {
  return (
    <div className={`grid grid-cols-3 gap-5 lg:grid-cols-4 1160:grid-cols-5 xl:grid-cols-6 ${cl}`}>{children}</div>
  )
}
