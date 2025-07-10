const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div className='general-title'>
      <div
        style={{
          clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
          borderColor: borderColor,
        }}
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
      >
        <div
          style={{
            backgroundColor: bg,
          }}
          className='pb-5 px-3 md:px-14 pt-3 md:pt-0'
        >
          <h2
            style={{
              color: color,
            }}
            className=''
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ClipPathTitle;
