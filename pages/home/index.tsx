import { GetServerSideProps } from "next"
import { useState } from "react"
import { CategoryApi } from "../../api/CategoryApi"
import TopCategoryRow from "../../components/top/TopCategoryRow"
import { Category } from "../../models/type/Category"

export default ({ categoryInfo }: {
    categoryInfo: {
        "new": Category[],
        "popular": Category[],
        "free": Category[]
    }
}) => {

    return <div>
        <TopCategoryRow categories={categoryInfo.popular} rowTitle="人気" />
        <TopCategoryRow categories={categoryInfo.free} rowTitle="無料使い放題" />
        <TopCategoryRow categories={categoryInfo.new} rowTitle="新着" />
    </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const categoryInfo = await CategoryApi.getCategoryList()
    return {

        props: {
            categoryInfo
        }
    }
}