import { Heart } from "@/app/components/atoms/icons/heart"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { sponsorsData } from "./data"
import { githubSponsorsStyles as css } from "./styles"
import { Tilt } from "@/app/components/globals/Tilt"

interface SponsorCardProps {
  link: string
  img: string
  name: string
  type: "organization" | "user"
}

export const GitHubSponsors = () => {
  return (
    <Tilt elementId="github-sponsors" max={4}>
      <div className={css.container}>
        <div className={css.innerContainer}>
          <div id="github-sponsors" className={css.cardContainer}>
            <div className={css.textContainer}>
              <p className={css.text}>
                <span className={css.spanStrong}>GitHub Sponsors </span> lets
                you support your favorite open source maintainers and projects.
              </p>
              <TextSpanWithUnderline
                title="Invest with GitHub Sponsors"
                styles="text-[#f0f0f0] !absolute bottom-0"
              />
            </div>
            <div className={css.gridContainer}>
              {sponsorsData.map((sponsor: any, index) => (
                <SponsorCard key={index} {...sponsor} />
              ))}
            </div>
          </div>
          <div className={css.securityLineContainer}>
            <div className={css.branchSecurityLine} />
          </div>
        </div>
      </div>
    </Tilt>
  )
}

const SponsorCard = ({ link, img, name, type }: SponsorCardProps) => {
  return (
    <a href={link} target="_blank" className={css.sponsorCard.container}>
      <img
        src={img}
        alt={name}
        className={`${css.sponsorCard.image} ${
          type === "user" ? css.sponsorCard.userImage : ""
        }`}
      />
      <span className={css.sponsorCard.name}>{name}</span>
      <button className={css.sponsorCard.buttonContainer}>
        <Heart className={css.sponsorCard.heartIcon} />
        <span className={css.sponsorCard.buttonText}>Sponsor</span>
      </button>
    </a>
  )
}
