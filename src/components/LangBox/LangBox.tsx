import React from 'react';

type LangBoxProps = {
  color?: string;
  name?: string;
  primary?: boolean
}

const LangBox: React.FC<LangBoxProps> = ({name, color, primary = false}) => {
  const textCls = ["m-0"]
  if (primary) textCls.push("h6")

  return(
    <div className="d-flex align-items-center me-3 mb-2">
      <div
        style={{
          display: 'inline-block',
          width: primary ? '25px' : '20px',
          height: primary ? '25px' : '20px',
          marginRight: '0.5rem',
          background: color || '#111',
          borderRadius: '50%',
        }}
      />
      <p className={textCls.join(" ")}>{name || 'Unknown'}</p>
    </div>
  )
}

export default LangBox