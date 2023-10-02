import Image from "next/image";
import style from "@/components/FeatureClientCard/style.module.scss";
type cardProps = {
  image: string;
  type: "feature" | "client";
  title: string;
  desc: string;
}

const FeatureClientCard: React.FC<cardProps> = (props: cardProps) => {
  const { type, image, title, desc } = props;
  return (
    <div className={`${style[`${type}card`]} ${style.card}`}>
      <div className={style.img}>
        <Image
          src={image}
          alt={"this is image"}
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
      <div className={style.card__text}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureClientCard;
