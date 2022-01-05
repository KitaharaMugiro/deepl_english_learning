import Link from "next/link"
import { Copyright } from "./Copyright"
import style from "./style.module.css"

export default () => {
    const MenuItems = [
        { title: "トップページ", link: "/" },
        { title: "お問い合わせ", link: "https://docs.google.com/forms/d/e/1FAIpQLSfpVp24DmJSR5IvLVqy0AuXSt1ZNxyAMxONMSZMEebh2EYqxw/viewform?usp=sf_link" },
        { title: "利用規約", link: "/t/terms_of_service" },
        { title: "プライバシーポリシー", link: "/t/privacy_policy" },

    ]

    const renderMenu = () => {
        return MenuItems.map((m) => {
            return (
                <div key={m.title} style={{ marginTop: 10 }}>
                    <Link href={m.link}>
                        <span className={style.link}>
                            {m.title}
                        </span>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div style={{
            padding: 30,
            width: "100%",
            backgroundColor: "#273132",
            minHeight: 360
        }}>

            <div className={style.container}>
                <div className={style.row}>
                    <div>
                        {renderMenu()}
                    </div>
                </div>

            </div>

            <div style={{ marginTop: 30 }}>
                <Copyright />
            </div>
        </div>
    )
}