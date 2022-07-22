import Header from "../components/header"

type Props = {
    children: any
}

export default function Default({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}