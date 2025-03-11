interface FilterWrapperProps {
  children?: React.ReactNode;
  data?: React.ReactNode;

}

export const FilterWrapper = ({ children, data }: FilterWrapperProps) => {
  return (
    <>
      <div>{children}</div>
      {data}
    </>
  )
}
