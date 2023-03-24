import styles from "./Loading.module.css";
function Loading(){
    return(<div>
        <div>
            <h3>Loading...</h3>
            <div>
                <div className={styles.square}></div>
            </div>
        </div>
    </div>)
}
export default Loading;