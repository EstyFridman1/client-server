import { useRef } from "react";
import { deletedToy } from "./api";

const DeleteToy = () => {
    const idRef = useRef(null);
    const sendDelete = async () => {

        try {
            await deletedToy(idRef.current.value);
            alert("המשחק נמחק בהצלחה")
        }
        catch (err) {
            alert("קרתה שגיאה במחיקה")
            console.log(err);
        }

    }


    return (<>
        <label>הקלד קוד משחק למחיקה</label>
        <input type="text" ref={idRef} />
        <button onClick={sendDelete}>מחק</button>
    </>);
}

export default DeleteToy;