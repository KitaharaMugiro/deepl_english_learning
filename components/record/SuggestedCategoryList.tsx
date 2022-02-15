import { Typography } from "@mui/material"
import { useState } from "react"
import { CategoryApi } from "../../api/CategoryApi"
import { Category } from "../../models/type/Category"
import CategoryCard from "../top/CategoryCard"
import useAsyncEffect from "use-async-effect"

interface Props {
    excludeCategorySlugs?: string[]
}

export default (props: Props) => {
    const [categoryList, setCategoryList] = useState<Category[]>([])
    const _categoryList = categoryList.filter(category => props.excludeCategorySlugs?.indexOf(category.categorySlug) === -1)

    const renderSuggestedCategory = () => {
        return (
            <div style={{ display: "flex", overflowX: "scroll" }}>
                {_categoryList.map(c => {
                    return <div
                        key={c.categorySlug}
                        style={{
                            margin: 10,
                        }}>
                        <CategoryCard
                            imageUrl={c.categoryImageUrl}
                            linkTo={`/q/${c.categorySlug}/start`}
                            content={c.categoryName}
                            description={c.categoryDescription}
                        ></CategoryCard>
                    </div>
                })}
            </div>
        )
    }

    useAsyncEffect(async () => {
        const categoryInfo = await CategoryApi.getCategoryList()
        const selected = categoryInfo.popular.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 3);
        setCategoryList(selected);
    }, [])


    return <>
        {renderSuggestedCategory()}
    </>
}