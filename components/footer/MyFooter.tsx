import { useAtom } from "jotai"
import Link from "next/link"
import { DisplayHeaderAtom } from "../../models/jotai/Display"
import { Copyright } from "./Copyright"
import style from "./style.module.css"

export default () => {
    const [displayHeader] = useAtom(DisplayHeaderAtom)
    const MenuItems = [
        { title: "トップページ", link: "/" },
        { title: "お問い合わせ", link: "https://docs.google.com/forms/d/e/1FAIpQLSfpVp24DmJSR5IvLVqy0AuXSt1ZNxyAMxONMSZMEebh2EYqxw/viewform?usp=sf_link" },
        { title: "利用規約", link: "/t/terms_of_service" },
        { title: "プライバシーポリシー", link: "/t/privacy_policy" },
        { title: "特定商取引法に基づく表記", link: "/t/legal" },
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
            marginTop: 140,
            minHeight: 360,
            display: displayHeader ? "block" : "none",
        }}>

            <div className={style.container}>
                <div className={style.row}>
                    <div>
                        {renderMenu()}
                    </div>
                </div>

            </div>
        </div>
    )
}