
import TableOrder from "../../TableOrder"
import Container from '@mui/material/Container';
import BasicBreadcrumbs from "../../Breadcrumbs";
import FooterPartner from "../FooterPatrner";

function Orders() {
    return (
        <>
            <div className="bg-backGroundColor pt-5 pb-5">
                <Container maxWidth="xl">
                    <div className="border-b-[1px] border-solid border-[#777777b5] m-[10px] py-[6px]">
                        <h1 className="text-white text-[26px] font-semibold">Orders</h1>
                        <BasicBreadcrumbs page="Orders" />
                    </div>
                    <div className="py-[8px]">
                        <TableOrder />
                    </div>
                </Container>
            </div>
            <FooterPartner />
        </>
    )
}

export default Orders;