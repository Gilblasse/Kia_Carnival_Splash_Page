

export default function Features({title, discription, active, onClick, time}) {


  const inactiveStyle = {
    opacity: 0.6
  }

  const style = active ? {
    opacity: 1
  } : inactiveStyle

  return (
    <div className='bar_and_discription' onClick={onClick}>
      <div className='progress_bar_container' style={inactiveStyle}>
      <div style={{width:'5px',height: `${time}px`}} className='progress_bar'></div>
      </div>
      <div >
        <h2 style={style}>{title}</h2>
        <div style={style} className='item_discription'>{discription}</div>
      </div>
    </div>
  )
}
