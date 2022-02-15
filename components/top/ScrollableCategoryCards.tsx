import { Category } from "../../models/type/Category"
import CategoryCard from "./CategoryCard"

interface Props {
    categories: Category[]
}

export default (props: Props) => {

    const renderCategoryCards = () => {
        return props.categories.map((category, index) => {
            return <div
                key={category.categorySlug}
                style={{
                    margin: 10,
                }}>
                <CategoryCard
                    imageUrl={category.categoryImageUrl}
                    linkTo={`/q/${category.categorySlug}/start`}
                    content={category.categoryName}
                    description={category.categoryDescription}
                />
            </div>
        })
    }

    return <div style={{ display: "flex", overflowX: "scroll" }}>
        {renderCategoryCards()}
    </div>
}