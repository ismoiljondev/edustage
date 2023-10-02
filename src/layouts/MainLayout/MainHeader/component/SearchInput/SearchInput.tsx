import clsx from "clsx";

import Container from "@/src/components/Container/Container";
import IconX from "@/public/icons/iconX.svg";
import style from "@/src/layouts/MainLayout/MainHeader/component/SearchInput/style.module.scss";

type SearchInputPropsType = {
  click?: () => void;
};

function SearchInput(props: SearchInputPropsType) {
  const { click } = props;
  return (
    <div className={clsx(style.search__input)}>
      <Container>
        <form action="">
          <input type="text" name="" id="" placeholder="Search Here" />

          <button type="button" onClick={click}>
            <IconX className={clsx(style.search__icon)} />
          </button>
        </form>
      </Container>
    </div>
  );
}

export default SearchInput;
