interface LoaderProps {
  cl?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}
export const Loader = ({ cl='', width, height, borderRadius }: LoaderProps) => {
  return (
    <div 
      className={`loader ${cl} animate-pulse bg-gradient-to-r bg-black/5`}
      style={{ 
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
        borderRadius: borderRadius ? `${borderRadius}px` : "0.5rem"
      }}  
    ></div>
  )
}
