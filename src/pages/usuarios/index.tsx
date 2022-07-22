import Link from "next/link";
import { User } from "../../@types/users";
import Main from "../../components/main";
import Title from "../../components/title";
import Default from "../../layouts/default";
import UserService from "../../services/UserService";
import styles from "../../styles/Usuario.module.css"
import { BsTrash, BsPen } from "react-icons/bs"

type Props = {
    users: User[]
}

export function User({ user }: { user: User }) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.year}</td>
            <td>{user.phone}</td>
            <td style={{ display: 'flex' }}>
                <Link href={`/usuarios/update/${user.id}`}>
                    <div className={styles.icon} style={{ marginRight: 10 }}>
                        <BsPen size={20} />
                    </div>
                </Link>
                <Link href={`/usuarios/delete/${user.id}`}>
                    <div className={styles.icon}>
                        <BsTrash size={20} />
                    </div>
                </Link>
            </td>
        </tr>
    )
}

export default function Usuarios({ users }: Props) {
    return (
        <Default>
            <Main>
                <Title title="Usuários" />
                <Link href={"/usuarios/create"}>
                    <div className={styles.button}>
                        Criar
                    </div>
                </Link>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Idade</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <User user={user} key={user.id} />)}
                    </tbody>
                </table>
            </Main>
        </Default>
    )
}

export async function getStaticProps() {
    const users: User[] = await UserService.get();

    return {
        props: {
            users
        }
    }
}