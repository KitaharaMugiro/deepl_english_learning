interface Props {
    categoryName: string
    onClickStart: () => void
}

export default (props: Props) => {

    return <div>
        <button onClick={props.onClickStart}>{props.categoryName} スタート</button>
    </div>
}