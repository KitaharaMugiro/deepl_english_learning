import style from "./style.module.css"

interface Props {
    index: number
    max: number
    onClick?: (index: number) => void
}

export default (props: Props) => {

    const renderDots = () => {
        if (props.max === 1) return null
        const dots = []
        for (let i = 0; i < props.max; i++) {
            dots.push(
                <div
                    key={i}
                    className={i === props.index ? style.dots__item_active : style.dots__item_inactive}
                    onClick={() => props.onClick && props.onClick(i)}
                />
            )
        }
        return dots

    }

    return (
        <div className={style.dots}>
            {renderDots()}
        </div>
    )
}