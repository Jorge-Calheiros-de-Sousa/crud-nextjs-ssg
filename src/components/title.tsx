type Props = {
    title: string
}

export default function Title({ title }: Props) {
    return (
        <h1>{title}</h1>
    )
}
