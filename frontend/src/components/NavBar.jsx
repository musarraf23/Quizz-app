import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import Logo from "./Logo";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/quizz" variant="flat">
                        Take Quizz
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* text-foreground */}

            <NavbarMenu className="bg-transparent flex flex-cols items-center gap-5 py-10">
                <NavbarMenuItem>
                    <Link
                        className="w-full text-white/70 hover:scale-90 transition-all"
                        href="/"
                        size="lg"
                    >
                        Home
                    </Link>
                </NavbarMenuItem>


                <NavbarMenuItem>
                    <Link
                        className="w-full text-white/70 hover:scale-90 transition-all"
                        href="/quizz"
                        size="lg"
                    >
                        Quizz
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>

        </Navbar>
    );
}


export default NavBar;
