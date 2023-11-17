import Container from "@/src/components/Container/Container";
import Typography from "@/src/components/Typography/Typography";
import style from "@/src/views/Home/Showcase/style.module.scss";
import clsx from "clsx";
import { showcaseLink } from "@/src/views/Home/Showcase/config";
import Link from "next/link";
import { Button } from "@/src/components";

function Showcase() {
  return (
    <div className={clsx(style.showcase)}>
      <Container>
        <Typography as="h4">
          BEST ONLINE EDUCATION SERVICE IN THE WORLD
        </Typography>
        <Typography as="h1">ONE STEP AHEAD THIS SEASON</Typography>
        <div className={clsx(style.buttons)}>
          {/* {showcaseLink.map((e, i) => (
            <Link href={e.href} key={i}>
              <Button>{e.name}</Button>
            </Link>
          ))} */}
        </div>
      </Container>
    </div>
  );
}

export default Showcase;
