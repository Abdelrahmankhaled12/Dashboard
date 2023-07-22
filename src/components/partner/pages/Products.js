import Container from '@mui/material/Container';
import BasicBreadcrumbs from "../../Breadcrumbs";
import CollapsibleTable from '../products/listTable';
import "../dashboard.css"

function Products() {
    return (
        <>
            <div className="bg-backGroundColor pt-5 pb-5">
                <Container maxWidth="xl">
                    <div className="border-b-[1px] border-solid border-[#777777b5] m-[10px] py-[6px]">
                        <h1 className="text-white text-[26px] font-semibold">Products</h1>
                        <BasicBreadcrumbs page="Products" />
                    </div>
                    <div className="py-[8px] tableProducts">
                        <CollapsibleTable />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Products;