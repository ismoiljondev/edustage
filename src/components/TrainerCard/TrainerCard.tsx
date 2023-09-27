import Image from "next/image";
import style from "./style.module.scss";

interface TrainerProps {
  image: string;
  title: string;
  major: string;
  desc: string;
  icons: string;
}

const TrainerCard: React.FC<TrainerProps> = (props : TrainerProps) => {
    const {image, title, major, desc, icons} = props
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <Image src={image} alt="this is image" width={200} height={200} />
      </div>
      <div className={style.card__text}>
        <div className={style.card__text__title}>
          <h2>{title}</h2>
          <p>{major}</p>
        </div>
        <div className={style.card__text__desc}>
          <p>{desc}</p>
          <p>{icons}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
