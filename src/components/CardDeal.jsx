import styles, {layout} from "../style.js";
import {Button} from "./Button.jsx";
import {card} from "../assets/index.js";

export const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.
            </h2>
            <p className={`${styles.paragraph} font-poppins text-white max-w-[740px] mt-5`}>Arcu tortor, purus in mattis
                at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <Button styles="mt-10"/>
        </div>
        <div className={`${layout.sectionImg}`}>
            <img src={card} alt="" className="w-[100%] h-[100%]"/>
        </div>
    </section>
)