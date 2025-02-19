import styles from "../style.js";
import {Button} from "./Button.jsx";

export const CTA = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-2xl box-shadow `}>
            <div className="flex flex-col">
                <h2 className={styles.heading2}>Let’s try our service now!</h2>
                <p className="font-poppins font-normal text-[18px]
             leading-[32px] text-white my-10 max-w-[470px] mt-5 ">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button/>
            </div>
        </section>
    )
}