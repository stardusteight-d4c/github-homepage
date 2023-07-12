import { organizationsData } from "./data"
import { organizationsStyles as css } from "./styles"

export const Organizations = () => {
  return (
    <div className={css.wrapper}>
      <span>Trusted by the world’s leading organizations ↘︎</span>
      <div className={css.container}>
        {organizationsData.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={css.image(index)}
          />
        ))}
      </div>
    </div>
  )
}
