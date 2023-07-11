import { ListItem, Search, Wrapper, SignIn, SignUp } from "./integrate"
import { data } from "./data"
import { navbarStyles as css } from "./styles"

export const Navbar = () => {
  return (
    <Wrapper>
      <ul className={css.unorderedList}>
        {[
          data.githubLogo,
          data.product,
          data.solutions,
          data.openSource,
          data.pricing,
        ].map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </ul>
      <div className={css.searchAndSubscriberContainer}>
        <Search />
        <div className={css.loginContainer}>
          <SignIn />
          <SignUp />
        </div>
      </div>
    </Wrapper>
  )
}
