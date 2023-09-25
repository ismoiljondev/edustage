import style from "./style.module.scss";
import Image from "next/image";
interface cardProps {
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
        <Image src={image} alt={"this is image"} width={100} height={100} />
      </div>
      <div className={style.text}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureClientCard;
