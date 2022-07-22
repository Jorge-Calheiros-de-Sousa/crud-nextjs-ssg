type Props = {
    children: any
}

export default function Button({ children, ...rest }: Props) {
    return (
        <button
            {...rest}
        >
            {children}
        </button>
    )
}