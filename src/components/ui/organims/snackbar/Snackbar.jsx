import { useEffect, useState } from "react";
import handleStyleSnackbar from "./style";

/* 
const snackbar = new SnackbarBuilder('pop')
  .setTitle('lolilo')
  .setSticky(true)
  .buildWarning()

  <Snackbar
    canClose={snackbar.canClose}
    duration={snackbar.duration}
    icon={snackbar.icon}
    message={snackbar.message}
    sticky={snackbar.sticky}
    title={snackbar.title}
    type={snackbar.type}
  />
*/
export default function Snackbar({ canClose, duration, icon, message, sticky, title, type }) {

  const [isclosed, setIsclosed] = useState(false);

  const handleClose = () => {
    if (canClose) return setIsclosed(true)
  }

  useEffect(() => {
    if (!duration) return

    const timer = setTimeout(() => {
      setIsclosed(true)
    }, duration)

    return () => clearTimeout(timer)
  })

  return (
    <>
      {isclosed ? '' : (
        <div
          style={
            { position: sticky && 'sticky', ...handleStyleSnackbar(type) }
          }
        >
          {icon && <img src={icon} alt={type} />}
          {title && <p>{title}</p>}
          <p>{message}</p>
          {canClose && <p onClick={handleClose}>X</p>}
        </div>
      )
      }
    </>
  )
}