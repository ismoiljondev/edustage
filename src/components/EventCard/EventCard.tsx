import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import Button from "../Button/Button";
interface EventProps {
  image: string;
  date?: number;
  month?: string;
  timestart?: string;
  timeend?: string;
  location?: string;
  text?: string;
  buttText?: string;
}
const EventsCard: React.FC<EventProps> = (props: EventProps) => {
  const { image, date, month, timeend, timestart, location, text, buttText } =
    props;
  function SayHi() {
    console.log("Hi");
  }
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <Image alt="This is image" src={image} width={500} height={500} />
      </div>
      <div className={style.blur}>
        <div className={style.blur__top}>
          <div className={style.blur__top__left}>
            <h2>{date}</h2>
            <p>{month}</p>
          </div>
          <div>
            <p>
              {timestart} AM - {timeend} AM
            </p>
            <p>{location}</p>
          </div>
        </div>
        <div className={style.blur__p}>
          <p>{text}</p>
        </div>
        <div className={style.btn}>
          <Button color={"yellow"} action={SayHi} text={buttText} />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
