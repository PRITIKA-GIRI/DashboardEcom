import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface DropdownMenuCategoryProps {
    selectedCategory: string | null
    onSelectCategory: (category: string | null) => void
}

export function DropdownMenuCategory({selectedCategory, onSelectCategory }: DropdownMenuCategoryProps) {
    const categories = ["electronics", "jewelery", "women's clothing", "men's clothing"]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    {selectedCategory ?? "Category"}
                    <span className="ml-2"><ChevronDown size={16} /></span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel onClick={() => onSelectCategory(null)}>
                        All
                    </DropdownMenuLabel>
                    {categories.map((cat) => (
                        <DropdownMenuItem
                            key={cat}
                            onClick={() => onSelectCategory(cat)}
                        >
                            {cat}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}