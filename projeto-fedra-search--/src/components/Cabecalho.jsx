import styles from './css/cabecalho.module.css'

export function Cabecalho() {
    return (
        <div>
        <h1 className={styles.titulo}>Bem vindo ao meu portfólio :D </h1>
        <img className={styles.foto} src="https://avatars.githubusercontent.com/u/109420580?v=4" alt="" srcset="" />
        <h3 className={styles.descricao}>Oi, me chamo Fedra. Aqui estão os trabalhos que realizei durante o curso da REPROGRAMA.</h3>
        </div>
    )
}