import styles from "./formMessaging.module.css";
function FormMessaging (props) {
const { isError, content } = props
 return (
   <div className = {
     isError === true ? styles.error : styles.success
   }>
    {content}
   </div>
 )
}

export default FormMessaging;