import Image from "next/image";
import style from "@/components/CourseCard/style.module.scss";

type CardProps = {
  image: string;
  price: number;
  title: string;
  desc: string;
  buttonText: string;
  userImage: string;
  userName: string;
}
const CourseCard: React.FC<CardProps> = (props: CardProps) => {
  const { buttonText, desc, image, price, title, userImage, userName } = props;
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <Image src={image} alt={title} width={500} height={500} />
      </div>
      <div className={style.card__text}>
        <div className={style.card__text__top}>
          <div className={style.card__text__top__name}>
            <button>{buttonText}</button>
          </div>
          <div className={style.card__text__top__price}>
            <p>${price}</p>
          </div>
        </div>
        <div className={style.card__text__middle}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className={style.card__text__bottom}>
          <div className={style.card__text__bottom__user}>
            <Image src={userImage} alt={userName} width={45} height={45} />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
