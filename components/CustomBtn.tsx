const CustomBtn = ({
  bg,
  textColor,
  children,
  className,
  onClick,
  ref,
}: CustomBtnProps) => {
  return (
    <button
      className={`${bg} ${textColor} ${className} rounded-full px-5 py-2 text-medium transition-all duration-300`}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  )
}

export default CustomBtn
