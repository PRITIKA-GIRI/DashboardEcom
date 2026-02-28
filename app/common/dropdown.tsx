import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuCategory() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Category <span></span></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem>Electronics</DropdownMenuItem>
                    <DropdownMenuItem>Jewellery</DropdownMenuItem>
                    <DropdownMenuItem>Women clothing</DropdownMenuItem>
                    <DropdownMenuItem>Men clothing</DropdownMenuItem>  
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
