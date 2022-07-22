import Link from "next/link";
import { useState } from "react";
import { User } from "../../@types/users";
import Input from "../../components/Input";
import Main from "../../components/main";
import Title from "../../components/title";
import Default from "../../layouts/default";
import UserService from "../../services/UserService";
import styles from "../../styles/Usuario.module.css";

export default function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [year, setYear] = useState(0)
    const [phone, setPhone] = useState('');

    function handleSubmit() {
        const data: User = {
            name: name,
            email: email,
            year: year,
            phone: phone
        }

        UserService.post(data).then((response) => {
            alert(response);
            window.location.href = "/usuarios"
        }).catch(error => { console.log(error) })
    }

    return (
        <Default>
            <Main>
                <Title title="Cadastro de usuário" />
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
                            Cadastrar
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