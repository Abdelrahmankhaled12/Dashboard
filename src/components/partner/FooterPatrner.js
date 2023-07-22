import { Container } from "@mui/material";

function FooterPartner() {
    return(
        <>
            <footer className="bg-[rgb(35,48,68)] pt-3 pb-3">
                <Container maxWidth="xl" className="flex justify-between">   
                <ul className="flex space-x-2">
                    <li className="text-[14px] font-semibold text-[rgb(224,224,224)] hover:bg-[rgba(255,255,255,0.08)] p-2 duration-300 cursor-pointer">Support</li>
                    <li className="text-[14px] font-semibold text-[rgb(224,224,224)] hover:bg-[rgba(255,255,255,0.08)] p-2 duration-300 cursor-pointer">Help Center</li>
                    <li className="text-[14px] font-semibold text-[rgb(224,224,224)] hover:bg-[rgba(255,255,255,0.08)] p-2 duration-300 cursor-pointer">Privacy</li>
                    <li className="text-[14px] font-semibold text-[rgb(224,224,224)] hover:bg-[rgba(255,255,255,0.08)] p-2 duration-300 cursor-pointer">Terms of Service</li>
                </ul>
                <p className="text-[14px] font-semibold text-[rgb(224,224,224)] p-2">© 2023 - Mira</p>
                </Container>
            </footer>
        </>
    )
}

export default FooterPartner;