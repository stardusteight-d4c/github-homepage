import { Github } from "@/app/components/atoms/icons/github"
import { gitHubnewsletterStyles as css } from "./styles"

export const GitHubNewsletter = () => {
  return (
    <div className={css.container}>
      <Github />
      <p className={css.text}>
        <span className={css.title}>Subscribe to our newsletter</span>
        <span className={css.description}>
          Get product updates, company news, and more.
        </span>
      </p>
      <button className={css.button}>
        <span className={css.buttonText}>Subscribe</span>
      </button>
    </div>
  )
}
