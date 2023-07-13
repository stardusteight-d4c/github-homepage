import { ReactNode } from "react"
import { socialIconsData } from "./data"
import { copyrightStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

interface SocialIconsListProps {
  Icon: React.ComponentType<{ className?: string }>
}

export const Copyright = () => {
  return (
    <Wrapper>
      <div className={css.copyrightContainer}>
        <ul className={css.copyrightUnorderedList}>
          <li>© 2023 GitHub, Inc.</li>
          {[
            "Terms",
            "Privacy (Updated 08/2022)",
            "Sitemap",
            "What is Git?",
          ].map((item, index) => (
            <li key={index} className={css.copyrightListItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={css.socialContainer}>
        <ul className={css.socialUnorderedList}>
          {socialIconsData.map((item, index) => (
            <SocialIconsList key={index} Icon={item.icon} />
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => (
  <div className={css.wrapper}>
    <div className={css.gridContainer}>{children}</div>
  </div>
)

const SocialIconsList = ({ Icon }: SocialIconsListProps) => (
  <li className={css.socialIconsList.listItem}>
    <Icon className={css.socialIconsList.icon} />
  </li>
)
