import Link from "next/link";
import { useState } from "react";
import { User } from "../../../@types/users";
import Input from "../../../components/Input";
import Main from "../../../components/main";
import Title from "../../../components/title";
import Default from "../../../layouts/default";
import UserService from "../../../services/UserService";
import styles from "../../../styles/Usuario.module.css";

export default function Update({ user }: { user: User }) {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [year, setYear] = useState(user.year)
    const [phone, setPhone] = useState(user.phone);

    const data: User = {
        name: name,
        email: email,
        year: year,
        phone: phone
    }

    function handleSubmit() {

        if (user.id) {
            UserService.update(user.id, data).then((response) => {
                alert(response);
                window.location.href = "/usuarios"
            }).catch(error => { console.log(error) })
        }
    }

    return (
        <Default>
            <Main>
                <Title title="Alterar usuário" />
                <form className={styles.form} action={"#"}>
                    <Input
                        placeholder="Nome"
                        value={name}
                        onChange={(e: any) => { setName(e.target.value) }}
                    />
                    <Input
                        placeholder="E-mail"
                        type={"email"}
                        value={email}
                        onChange={(e: any) => { setEmail(e.target.value) }}
                    />
                    <Input
                        placeholder="Idade"
                        type={"number"}
                        value={year}
                        onChange={(e: any) => { setYear(e.target.value) }}
                    />
                    <Input
                        placeholder="Telefone"
                        value={phone}
                        onChange={(e: any) => { setPhone(e.target.value) }}
                    />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: 150,
                        marginTop: 10
                    }}>
                        <div className={styles.btn} onClick={handleSubmit} style={{ backgroundColor: 'cornflowerblue', color: "white", marginRight: 10, cursor: "pointer" }}>
                            Alterar
                        </div>
                        <Link href={"/usuarios"}>
                            <div className={styles.btn} style={{ backgroundColor: 'rgb(222, 222, 222)', cursor: "pointer" }}>
                                Cancelar
                            </div>
                        </Link>
                    </div>
                </form>
            </Main>
        </Default >
    )
}

export async function getStaticPaths() {
    const users: User[] = await UserService.get();

    const paths = users.map((user) => ({
        params: { id: user.id }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: User }) {
    const user = await UserService.getById(params.id ? params.id : 0);

    return {
        props: {
            user
        }
    }
}