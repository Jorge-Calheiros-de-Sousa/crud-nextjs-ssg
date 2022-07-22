type Props = {
    children: any
}

export default function Main({ children, ...rest }: Props) {
    return (
        <main style={{ marginLeft: 20, marginRight: 20, ...rest }}>
            {children}
        </main >
    )
}